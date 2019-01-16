import React from 'react';
import styled, { withTheme } from 'styled-components';
import Star from 'react-feather/dist/icons/star';

import { ItemsContext } from '../../utils/siteContext';
import { mediaSize } from '../../utils/siteTools';


const ComponentContainer = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 2vw;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ${mediaSize.tablet`
    width: 90%;
    padding: 5vw 2vw;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 7px 40px;
    margin: 0 auto 5vw auto;

    display: grid;
    grid-template-columns: 1fr 9fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      'fav title'
      'desc desc';
    justify-items: center;
    align-items: center;
  `}
`;

const FavouriteButton = styled.div`
  width: 3%;
  padding-top: 2px; // compensate for icon being slightly above center

  ${mediaSize.tablet`
    grid-area: fav;
    width: auto;
  `}

  ${mediaSize.mobile`
    align-self: start;
    padding-top: 0;
  `}
`;

const TitleContainer = styled.div`
  color: ${props => props.theme.colors.offBlack};
  width: 45%;

  ${mediaSize.tablet`
    grid-area: title;
    width: 100%;
  `}
`;

const DescContainer = styled.div`
  color: ${props => props.theme.colors.offBlack};
  width: 50%;

  & > ul {
    margin: 0;
    padding: 0;
  }

  ${mediaSize.tablet`
    grid-area: desc;
    justify-self: center;
    width: 95%;

    & > ul > li {
      list-style-type: none;
      margin-top: 2vw;
    }
  `}

  ${mediaSize.mobile`

  `}
`;

const unescapeHtml = (safe) => {
    return safe.replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'");
}

// Component
const ItemCard = ({title, body, ith, isFavourite, theme}) => (
  <ItemsContext.Consumer>
    {({items, favs, updateFavs}) => (
      <ComponentContainer>
        <FavouriteButton onClick={() => updateFavs(ith, isFavourite)}><Star size="2vh" color={isFavourite ? theme.colors.secondary : "grey"}/></FavouriteButton>
        <TitleContainer>{title}</TitleContainer>
        <DescContainer dangerouslySetInnerHTML={{__html: unescapeHtml(body)}}></DescContainer> { /*  TODO: possibly implement sanitizing script that makes sure the only html elements are <ul>, <li>, and <strong> */ }
        { /*  ^^ Not really sure what the best way to sanitize this and make it safe without expending lots of effort with parsing the HTML body it returns, but the API is trusted so this should be safe */ }
      </ComponentContainer>
    )}
  </ItemsContext.Consumer>
);

export default withTheme(ItemCard);
