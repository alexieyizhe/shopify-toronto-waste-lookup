import React from 'react';
import styled, { withTheme } from 'styled-components';
import Star from 'react-feather/dist/icons/star';

import { ItemsContext } from '../../utils/siteContext';


const ComponentContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 2vw;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  ${'' /* display: grid;
  grid-template-columns: 5% 35% 54%;
  grid-template-rows: auto;
  grid-column-gap: 2%;
  grid-template-areas: 'fav title desc'; */}
`;

const FavouriteButton = styled.div`
  grid-area: fav;
  width: 3%;
`;

const TitleContainer = styled.div`
  grid-area: title;
  color: ${props => props.theme.colors.offBlack};
  width: 45%;
`;

const DescContainer = styled.div`
  grid-area: desc;
  color: ${props => props.theme.colors.offBlack};
  width: 50%;

  & > ul {
    margin: 0;
    padding: 0;
  }
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
        <FavouriteButton onClick={() => updateFavs(ith, isFavourite)}><Star size="1vw" color={isFavourite ? theme.colors.secondary : "grey"}/></FavouriteButton>
        <TitleContainer>{title}</TitleContainer>
        <DescContainer dangerouslySetInnerHTML={{__html: unescapeHtml(body)}}></DescContainer> { /*  TODO: possibly implement sanitizing script that makes sure the only html elements are <ul>, <li>, and <strong> */ }
        { /*  ^^ Not really sure what the best way to sanitize this and make it safe without expending lots of effort with parsing the HTML body it returns, but the API is trusted so this should be safe */ }
      </ComponentContainer>
    )}
  </ItemsContext.Consumer>
);

export default withTheme(ItemCard);
