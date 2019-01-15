import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
// import { Link, graphql } from 'gatsby';

import { siteTitle, siteTheme } from '../utils/siteData';
import { GlobalStyle } from '../utils/siteTools';

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

export default () => {
  const testItem = {
    title: 'Garbage (wrapping and tying)',
    body: [
      'Place item in the <strong>Garbage Bin.</strong>'
    ]
  };

  return (
    <ThemeProvider theme={siteTheme}>
      <AppContainer>
        <GlobalStyle />

        <PageHeader title={siteTitle} />
        <SearchBar />
        <SearchResults>
          <ItemCard title={testItem.title} body={testItem.body} />
          <ItemCard title={testItem.title} body={testItem.body} />
          <ItemCard title={testItem.title} body={testItem.body} />
        </SearchResults>
        <SearchFavourites>
          <ItemCard title={testItem.title} body={testItem.body} />
        </SearchFavourites>
      </AppContainer>
    </ThemeProvider>
  );
};

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
