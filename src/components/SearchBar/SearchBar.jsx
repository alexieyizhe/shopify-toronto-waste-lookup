import React from 'react';
import styled from 'styled-components';
import Search from 'react-feather/dist/icons/search';
import { ItemsContext } from '../../utils/siteContext';

import { searchBarEmptyPlaceholder } from '../../utils/siteData';


const ComponentContainer = styled.div`
  height: 4vw;
  margin: ${props => props.theme.styling.bodySpacing} 0; // margin allows for margin collapsing

  & > form {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 4vw;
  }
`;

const SearchInputBox = styled.input`
  width: 93vw;

  font-size: 2vw;

  border: none; // css reset for default input styling
  border-radius: 5px;
  border: 1px solid grey;
`;

const SearchButton = styled.button`
  width: 4vw;

  background-color: ${props => props.theme.colors.secondary};

  border: none;
  border-radius: 5px;
`;

// Component
export default () => (
  <ItemsContext.Consumer>
    {({ updateSearch, startSearch }) => (
      <ComponentContainer>
        <form onSubmit={(e) => { e.preventDefault(); startSearch(); }} >
          <SearchInputBox placeholder={searchBarEmptyPlaceholder} onChange={(e) => updateSearch(e.target.value)} />
          <SearchButton><Search color="white" size="2vw" /></SearchButton>
        </form>
      </ComponentContainer>
    )}
  </ItemsContext.Consumer>
);
