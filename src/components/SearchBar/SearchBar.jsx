import React from 'react';
import styled from 'styled-components';
import Search from 'react-feather/dist/icons/search';
import { ItemsContext } from '../../utils/siteContext';

import { searchBarEmptyPlaceholder } from '../../utils/siteData';
import { mediaSize } from '../../utils/siteTools';


const ComponentContainer = styled.div`
  height: 7vh;
  margin: 2vh 0; // margin allows for margin collapsing

  & > form {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 100%;
  }
`;

const SearchInputBox = styled.input`
  width: 90%;

  font-size: 1em;
  padding: 1vh;

  border: none; // css reset for default input styling
  border-radius: 5px;
  border: 1px solid grey;

  ${mediaSize.tablet`
    width: 80%;
  `}

  ${mediaSize.mobile`
    width: 70%;
  `}
`;

const SearchButton = styled.button`
  width: 7vh;

  background-color: ${props => props.theme.colors.secondary};

  border: none;
  border-radius: 5px;
`;

// Component
export default () => (
  <ItemsContext.Consumer>
    {({ searchQuery, updateSearch, startSearch }) => (
      <ComponentContainer>
        <form onSubmit={(e) => { e.preventDefault(); startSearch(); }} >
          <SearchInputBox placeholder={searchBarEmptyPlaceholder} value={searchQuery} onChange={(e) => updateSearch(e.target.value)} />
          <SearchButton><Search color="white" size="4vh" /></SearchButton>
        </form>
      </ComponentContainer>
    )}
  </ItemsContext.Consumer>
);
