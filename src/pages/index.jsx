import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import "isomorphic-fetch";

import { siteTitle, siteTheme, wasteDataAPIEndPoint, FetchStateEnum } from '../utils/siteData';
import { GlobalStyle, mediaSize } from '../utils/siteTools';
import { ItemsContext } from '../utils/siteContext';

import HelmetHead from '../components/HelmetHead/HelmetHead';
import PageHeader from '../components/PageHeader/PageHeader';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import SearchFavourites from '../components/SearchFavourites/SearchFavourites';
import ItemCard from '../components/ItemCard/ItemCard';


// refactor into template later?
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


class App extends React.Component {
  constructor(props) {
    super(props);

    /* CONTEXT UPDATING FUNCTIONS */
    this.updateFavs = (wasteItemIndex, remove = false) => {
      this.setState(prevState => {
        if(remove) prevState.currentFavs.delete(wasteItemIndex);
        else prevState.currentFavs.add(wasteItemIndex);

        return prevState;
      });
    }

    this.updateSearch = (searchQuery) => {
      this.setState(prevState => ({
        searchQuery,
        searchResults: searchQuery.length ? prevState.searchResults : new Set(),
        appStatus: searchQuery.length ? prevState.appStatus : FetchStateEnum.READY
      }));
    }

    this.startSearch = () => {
      if(this.state.appStatus === FetchStateEnum.READY || this.state.appStatus === FetchStateEnum.SEARCHING) { // eslint-disable-line
        const { searchQuery } = this.state;
        let newSearchResults = new Set(); // eslint-disable-line

        this.wasteItems.forEach((item, i) => {
          const match = (item.keywords.search(searchQuery) >= 0);
          if(match) newSearchResults.add(i);
        });
        this.setState({ searchResults: newSearchResults, appStatus: FetchStateEnum.SEARCHING })
      }
    }

    /* FETCHING JSON DATA FROM API */
    fetch(wasteDataAPIEndPoint).then(response => (
      response.json()
    )).then(wasteItemData => {
      this.wasteItems = wasteItemData;
      this.setState({ appStatus: FetchStateEnum.READY });
    }).catch(() => {
      // TODO: add error handling, possible in state to display an error when API is down
      this.setState({ appStatus: FetchStateEnum.ERROR });
    });

    /* SET INITIAL STATE */
    this.state = {
      appStatus: FetchStateEnum.WAITING,
      searchQuery: '',
      searchResults: new Set(),
      currentFavs: new Set(), // eslint-disable-line
      updateFavs: this.updateFavs, // eslint-disable-line
      updateSearch: this.updateSearch, // eslint-disable-line
      startSearch: this.startSearch // eslint-disable-line
    }
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
                {(appStatus === FetchStateEnum.READY || appStatus === FetchStateEnum.SEARCHING) &&
                  Array.from(searchResults).map((resultIndex, i) => {
                  const resultItem = {...this.wasteItems[resultIndex]}; // prevent mutation of waste item catalogue
                  return resultItem ? <ItemCard delayIndex={i} key={`favs${resultIndex}`} title={resultItem.title} body={resultItem.body} ith={resultIndex} isFavourite={currentFavs.has(resultIndex)}/> : null;
                })}
              </SearchResults>


              <SearchFavourites>
                {Array.from(currentFavs).map((favIndex, i) => {
                  const favItem = {...this.wasteItems[favIndex]}; // prevent mutation of waste item catalogue
                  return favItem ? <ItemCard delayIndex={i} key={`favs${favIndex}`} title={favItem.title} body={favItem.body} ith={favIndex} isFavourite/> : null;
              })}
            </SearchFavourites>


            </ItemsContext.Provider>
          </AppContainer>
        </>
      </ThemeProvider>
    );
  }
}


export default App;


// export const pageQuery = graphql`
//   query contentQuery {
//     allContentJson {
//       edges {
//         node {
//           index {
//             title
//             subtitle
//           }
//         }
//       }
//     }
//   }
// `;
