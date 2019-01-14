import React from 'react';
import styled from 'styled-components';
// import { Link, graphql } from 'gatsby';

import { siteTitle } from '../utils/siteData';

import PageHeader from '../components/PageHeader/PageHeader';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import SearchFavourites from '../components/SearchFavourites/SearchFavourites';

// refactor into template later?
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default () => (
  <AppContainer>
    <PageHeader title={siteTitle} />
    <SearchBar />
    <SearchResults />
    <SearchFavourites />
  </AppContainer>
);

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
