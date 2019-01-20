import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Search from 'react-feather/dist/icons/search';
import Loader from 'react-loader-spinner';

import { ItemsContext } from '../../utils/siteContext';
import {
  searchBarEmptyPlaceholder,
  FetchStateEnum
} from '../../utils/siteData';
import { mediaSize } from '../../utils/siteTools';

/* --- STYLES & ANIMATIONS --- */
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

const SearchInputContainer = styled.div`
  display: flex;
  position: relative;
  width: 90%;

  ${mediaSize.tablet`
    width: 80%;
  `}

  ${mediaSize.mobile`
    width: 70%;
  `}
`;

const SearchInputBox = styled.input`
  flex: 1; // occupy entire container so loader can overlap on right
  font-size: 1em;
  padding: 1vh;

  border: none; // css reset for default input styling
  border-radius: 5px;
  border: 1px solid grey;
`;

const SearchLoaderContainer = styled.div`
  position: absolute;
  top: 1.5vh;
  right: 1.5vh;
  height: 4vh;
  width: 4vh;
  margin: auto;
  display: inline-block;
`;

const SearchButton = styled.button`
  width: 7vh;

  background-color: ${props => props.theme.colors.secondary};

  border: none;
  border-radius: 5px;
`;

/* --- Component [FUNCTIONAL] --- */
const Bar = ({ theme }) => (
  <ItemsContext.Consumer>
    {({ appStatus, searchQuery, updateSearch, startSearch }) => (
      <ComponentContainer>
        <form
          onSubmit={e => {
            e.preventDefault();
            startSearch();
          }}
        >
          <SearchInputContainer>
            <SearchInputBox
              placeholder={searchBarEmptyPlaceholder}
              value={searchQuery}
              onChange={e => updateSearch(e.target.value)}
            />
            {appStatus === FetchStateEnum.SEARCHING && (
              <SearchLoaderContainer>
                <Loader
                  type="Oval"
                  color={theme.colors.secondary}
                  height="100%"
                  width="100%"
                />
              </SearchLoaderContainer>
            )}
          </SearchInputContainer>

          <SearchButton>
            <Search color="white" size="4vh" />
          </SearchButton>
        </form>
      </ComponentContainer>
    )}
  </ItemsContext.Consumer>
);

Bar.propTypes = {
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withTheme(Bar);
