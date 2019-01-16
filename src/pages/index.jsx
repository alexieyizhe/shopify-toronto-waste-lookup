import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import { Link, graphql } from 'gatsby';

import { siteTitle, siteTheme, wasteDataAPIEndPoint } from '../utils/siteData';
import { GlobalStyle } from '../utils/siteTools';
import { ItemsContext } from '../utils/siteContext';

import PageHeader from '../components/PageHeader/PageHeader';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import SearchFavourites from '../components/SearchFavourites/SearchFavourites';
import ItemCard from '../components/ItemCard/ItemCard';

// refactor into template later?
const AppContainer = styled.div`
  width: 100vw;
  height: auto;
`;


class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateFavs = (wasteItemIndex, remove = false) => {
      this.setState(prevState => {
        if(remove) prevState.currentFavs.delete(wasteItemIndex);
        else prevState.currentFavs.add(wasteItemIndex);

        return prevState;
      });
    }

    this.updateSearch = (searchQuery) => {
      this.setState(prevState => ({ searchQuery, searchResults: searchQuery.length ? prevState.searchResults : new Set() }));
    }

    this.startSearch = () =>{
      console.log(`searchQuery is ${this.state.searchQuery}`);
      const testSearchArray = Array.from({length: 6}, () => Math.floor(Math.random() * 50));
      this.setState({ searchResults: new Set(testSearchArray)})
    }


    fetch(wasteDataAPIEndPoint).then(response => {
      return response.json();
    }).then(wasteItemData => {
      this.wasteItems = wasteItemData;

      // FOR TESTING ONLY TODO: REMOVE THIS
      this.setState({searchResults: new Set([0, 2, 23])});
      // FOR TESTING ONLY

    }).catch(err => {
      // TODO: add error handling, possible in state to display an error when API is down
    });

    this.state = {
      searchQuery: '',
      searchResults: new Set(),
      currentFavs: new Set(), // eslint-disable-line
      updateFavs: this.updateFavs, // eslint-disable-line
      updateSearch: this.updateSearch, // eslint-disable-line
      startSearch: this.startSearch // eslint-disable-line
    }
  }

  render() {
    const { searchResults, currentFavs } = this.state;
    return (
      <ThemeProvider theme={siteTheme}>
        <AppContainer>
          <GlobalStyle />

          <PageHeader title={siteTitle} />
          <ItemsContext.Provider value={this.state}>

            <SearchBar />


            <SearchResults>
              {Array.from(searchResults).map(resultIndex => {
                const resultItem = {...this.wasteItems[resultIndex]}; // prevent mutation of waste item catalogue
                return resultItem ? <ItemCard key={resultIndex} title={resultItem.title} body={resultItem.body} ith={resultIndex} isFavourite={currentFavs.has(resultIndex)}/> : null;
              })}
            </SearchResults>



            <SearchFavourites>
              {currentFavs.size > 0 && Array.from(currentFavs).map(favIndex => {
                const favItem = {...this.wasteItems[favIndex]}; // prevent mutation of waste item catalogue
                return favItem ? <ItemCard key={favIndex} title={favItem.title} body={favItem.body} ith={favIndex} isFavourite/> : null;
              })}
            </SearchFavourites>

          </ItemsContext.Provider>
        </AppContainer>
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
