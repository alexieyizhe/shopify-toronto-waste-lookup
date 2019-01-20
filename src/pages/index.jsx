import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { debounce } from 'debounce';
import 'isomorphic-fetch';

import {
  siteTitle,
  siteTheme,
  wasteDataAPIEndPoint,
  FetchStateEnum,
  LocalStorageKeysEnum,
  DAY_MS
} from '../utils/siteData';
import { GlobalStyle, mediaSize } from '../utils/siteTools';
import { ItemsContext } from '../utils/siteContext';

import HelmetHead from '../components/HelmetHead/HelmetHead';
import PageHeader from '../components/PageHeader/PageHeader';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import SearchFavourites from '../components/SearchFavourites/SearchFavourites';
import ItemCard from '../components/ItemCard/ItemCard';
import PageFooter from '../components/PageFooter/PageFooter';

/* --- STYLES & ANIMATIONS --- */
const AppContainer = styled.div`
  width: 100vw;
  height: auto;

  font-size: 1.5vw;

  ${mediaSize.tablet`
    font-size: 3vw;
  `}

  ${mediaSize.mobile`
    font-size: 5vw;
  `}
`;

/* --- Component --- */
class App extends React.Component {
  constructor(props) {
    super(props);

    /* DEFINE CONTEXT UPDATING FUNCTIONS */
    this.updateFavs = (wasteItemIndex, remove = false) => {
      this.setState(prevState => {
        if (remove) prevState.currentFavs.delete(wasteItemIndex);
        else prevState.currentFavs.add(wasteItemIndex);

        return prevState;
      });
    };

    this.updateSearch = searchQuery => {
      this.setState(prevState => ({
        searchQuery,
        searchResults: searchQuery.length ? prevState.searchResults : new Set(),
        appStatus: searchQuery.length
          ? prevState.appStatus
          : FetchStateEnum.READY
      }));

      if (searchQuery.length) {
        this.setState({ appStatus: FetchStateEnum.SEARCHING });
        this.delayedStartSearch();
      } else {
        this.setState({ appStatus: FetchStateEnum.READY });
      }
    };

    this.startSearch = () => {
      if (
        this.state.appStatus === FetchStateEnum.SEARCHING &&
        this.state.searchQuery.length
      ) {
        const { searchQuery } = this.state;
        const newSearchResults = new Set();

        this.wasteItems.forEach((item, i) => {
          const match = item.keywords.indexOf(searchQuery) >= 0;
          if (match) newSearchResults.add(i);
        });
        this.setState({ searchResults: newSearchResults });
      }
      this.setState({ appStatus: FetchStateEnum.SEARCHED });
    };

    this.delayedStartSearch = debounce(() => this.startSearch(), 1000);

    /* SET INITIAL STATE */
    this.state = {
      appStatus: FetchStateEnum.WAITING,
      searchQuery: '',
      searchResults: new Set(),
      currentFavs: new Set(),
      updateFavs: this.updateFavs,
      updateSearch: this.updateSearch,
      startSearch: this.startSearch
    };
  }

  componentDidMount() {
    /* INITIALIZE ALL DATA OF THE APP */
    this.initAppData();

    // Add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener('beforeunload', () => this.saveStatusToStorage());
  }

  componentWillUnmount() {
    // Removes event listener added on mount to unload
    window.removeEventListener('beforeunload', () =>
      this.saveStatusToStorage()
    );

    // Saves the status much like on unload
    this.saveStatusToStorage();
  }

  /* Initialize the data the app needs from available sources */
  initAppData() {
    /* FETCH DATA FROM LOCALSTORAGE */
    const appReady = this.loadStatusFromStorage();

    // Get time of last API call
    let lastAPICall = localStorage.getItem('lastAPICall');
    try {
      lastAPICall = JSON.parse(lastAPICall);
      if (lastAPICall - Date.now() > DAY_MS) {
        // refresh stale API results
        this.fetchWasteItemData();
      }
    } catch (e) {
      console.log(e);
    }

    if (!appReady) this.fetchWasteItemData(); // did not find API call cached in localStorage
  }

  /* Fetch JSON waste item data from the API */
  fetchWasteItemData() {
    fetch(wasteDataAPIEndPoint)
      .then(response => response.json())
      .then(wasteItemData => {
        this.wasteItems = wasteItemData;
        localStorage.setItem('lastAPICall', JSON.stringify(Date.now()));
        this.setState({ appStatus: FetchStateEnum.READY });
      })
      .catch(() => {
        this.setState({ appStatus: FetchStateEnum.ERROR });
      });
  }

  /* Save the app's current status to localStorage */
  saveStatusToStorage() {
    Object.keys(LocalStorageKeysEnum).forEach(key => {
      if (key === 'lastAPIResults') {
        localStorage.setItem('lastAPIResults', JSON.stringify(this.wasteItems));
      } else if (key === 'lastFavourites' || key === 'lastSearchResults') {
        localStorage.setItem(
          key,
          JSON.stringify(Array.from(this.state[LocalStorageKeysEnum[key]]))
        );
      } // prevent getting stuck on displaying SEARCHING status forever
      else if (key === 'lastStatus') {
        localStorage.setItem(
          key,
          JSON.stringify(
            this.state.appStatus === FetchStateEnum.SEARCHING
              ? FetchStateEnum.READY
              : this.state.appStatus
          )
        );
      } else {
        localStorage.setItem(
          key,
          JSON.stringify(this.state[LocalStorageKeysEnum[key]])
        );
      }
    });
  }

  /* Loads the data the app needs from localStorage */
  loadStatusFromStorage() {
    Object.keys(LocalStorageKeysEnum).forEach(key => {
      if (localStorage.hasOwnProperty(key)) {
        // eslint-disable-line
        let valueInStorage = localStorage.getItem(key);
        try {
          valueInStorage = JSON.parse(valueInStorage);

          if (key === 'lastAPIResults') {
            this.wasteItems = valueInStorage;
          } else if (key === 'lastFavourites' || key === 'lastSearchResults') {
            this.setState({
              [LocalStorageKeysEnum[key]]: new Set(Array.from(valueInStorage))
            });
          } else {
            this.setState({ [LocalStorageKeysEnum[key]]: valueInStorage });
          }
        } catch (e) {
          // usually an invalid parse (possibly empty string)
          console.log(e);
        }
      }
    });

    return this.wasteItems !== undefined; // return true if API call results cached already in localStorage
  }

  render() {
    const { searchResults, currentFavs, appStatus } = this.state;
    return (
      <ThemeProvider theme={siteTheme}>
        <>
          <HelmetHead />
          <GlobalStyle />
          <AppContainer>
            <PageHeader title={siteTitle} />

            <ItemsContext.Provider value={this.state}>
              <SearchBar />

              <SearchResults>
                {appStatus !== FetchStateEnum.WAITING &&
                  Array.from(searchResults).map((resultIndex, i) => {
                    const resultItem = { ...this.wasteItems[resultIndex] }; // prevent mutation of waste item catalogue
                    return resultItem ? (
                      <ItemCard
                        delayIndex={i}
                        key={`favs${resultIndex}`}
                        title={resultItem.title}
                        body={resultItem.body}
                        ith={resultIndex}
                        isFavourite={currentFavs.has(resultIndex)}
                      />
                    ) : null;
                  })}
              </SearchResults>

              <SearchFavourites>
                {Array.from(currentFavs).map((favIndex, i) => {
                  const favItem = { ...this.wasteItems[favIndex] }; // prevent mutation of waste item catalogue
                  return favItem ? (
                    <ItemCard
                      delayIndex={i}
                      key={`favs${favIndex}`}
                      title={favItem.title}
                      body={favItem.body}
                      ith={favIndex}
                      isFavourite
                    />
                  ) : null;
                })}
              </SearchFavourites>
            </ItemsContext.Provider>

            <PageFooter />
          </AppContainer>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
