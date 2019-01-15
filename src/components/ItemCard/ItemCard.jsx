import React from 'react';
import styled from 'styled-components';
import Star from 'react-feather/dist/icons/star';

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
export default ({title, body}) => (
  <ComponentContainer>
    <FavouriteButton><Star size="1vw"/></FavouriteButton>
    <TitleContainer>{title}</TitleContainer>
    <DescContainer>
      <ul>
        <li dangerouslySetInnerHTML={{__html: body[0]}} /> { /*  TODO: refactor this */ }
        <li dangerouslySetInnerHTML={{__html: body[0]}} /> { /*  TODO: refactor this */ }
        <li dangerouslySetInnerHTML={{__html: body[0]}} /> { /*  TODO: refactor this */ }
      </ul>
    </DescContainer>
  </ComponentContainer>
);