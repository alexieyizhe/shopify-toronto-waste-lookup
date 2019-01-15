import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import { Link, graphql } from 'gatsby';

import { siteTitle, siteTheme } from '../utils/siteData';
import { GlobalStyle } from '../utils/siteTools';
import { ItemsContext, wasteItems } from '../utils/siteContext';

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
        if(remove) {
          console.log('removing from favourites');
          prevState.currentFavs.delete(wasteItemIndex);
        } else {
          console.log('adding to favourites');
          prevState.currentFavs.add(wasteItemIndex);
        }
        return prevState;
      });
    }

    this.state = {
      currentItems: wasteItems,
      currentFavs: new Set(), // eslint-disable-line
      updateFavs: this.updateFavs // eslint-disable-line
    }
  }

  render() {
    const { currentItems, currentFavs } = this.state;
    console.log(Array.from(currentFavs));
    return (
      <ThemeProvider theme={siteTheme}>
        <AppContainer>
          <GlobalStyle />

          <PageHeader title={siteTitle} />
          <ItemsContext.Provider value={this.state}>
            <SearchBar />
            <SearchResults>
              {currentItems.map((item, i) => (<ItemCard title={item.title} body={item.body} ith={i} isFavourite={currentFavs.has(i)}/>))}
            </SearchResults>
            <SearchFavourites>
              {Array.from(currentFavs).map(favIndex => <ItemCard title={currentItems[favIndex].title} body={currentItems[favIndex].body} ith={favIndex} isFavourite/>)}
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
