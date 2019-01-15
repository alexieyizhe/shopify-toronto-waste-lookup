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
  font-size: 1.5vw;

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

// Component
const ItemCard = ({title, body, ith, remove, theme}) => (
  <ItemsContext.Consumer>
    {({items, favs, updateFavs}) => (
      <ComponentContainer>
        <FavouriteButton onClick={() => updateFavs(ith, remove)}><Star size="1vw" color={remove ? theme.colors.secondary : theme.colors.offBlack}/></FavouriteButton>
        <TitleContainer>{title}</TitleContainer>
        <DescContainer>
          <ul>
            <li dangerouslySetInnerHTML={{__html: body[0]}} /> { /*  TODO: refactor this */ }
            <li dangerouslySetInnerHTML={{__html: body[0]}} /> { /*  TODO: refactor this */ }
            <li dangerouslySetInnerHTML={{__html: body[0]}} /> { /*  TODO: refactor this */ }
          </ul>
        </DescContainer>
      </ComponentContainer>
    )}
  </ItemsContext.Consumer>
);

export default withTheme(ItemCard);
