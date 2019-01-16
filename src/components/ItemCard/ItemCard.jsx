import React, { forwardRef } from 'react';
import styled, { withTheme } from 'styled-components';
import posed from 'react-pose';

import { ItemsContext } from '../../utils/siteContext';
import { mediaSize } from '../../utils/siteTools';

const CardAnim = {
  enter: {
    x: 0,
    opacity: 1,
    delay: ({ delayIndex }) => delayIndex * 25
  },
  exit: { x: 100, opacity: 0 }
};

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

  ${mediaSize.tablet`
    grid-area: fav;
    width: auto;
  `}

  ${mediaSize.mobile`
    align-self: start;
    padding-top: 0;
  `}


  & svg {
    cursor: pointer;

    transition: fill 200ms ease-in-out;
    fill: ${props => props.theme.colors.offBlack};

    &:hover, &.favourited {
      fill: ${props => props.theme.colors.secondary};
    }

    width: 1.5vw;
    height: 1.5vw;

    ${mediaSize.tablet`
      width: 3vw;
      height: 3vw;
    `}

    ${mediaSize.mobile`
      width: 4vw;
      height: 4vw;
    `}
  }
`;

const TitleContainer = styled.div`
  color: ${props => props.theme.colors.offBlack};
  width: 45%;

  ${mediaSize.tablet`
    grid-area: title;
    width: 100%;

    font-weight: 600; 
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

// HTML needs to be unescaped, otherwise React treats it as regular ol' text
// Code source: https://stackoverflow.com/questions/22279231/using-js-jquery-how-can-i-unescape-html-and-put-quotes-back-in-the-str
const unescapeHtml = (safe) => (
  safe.replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
);

// Component
export const NoAnimItemCard = forwardRef(({title, body, ith, isFavourite, theme}, innerRef) => (
  <ItemsContext.Consumer>
    {({items, favs, updateFavs}) => (
      <ComponentContainer ref={innerRef}>
        <FavouriteButton onClick={() => updateFavs(ith, isFavourite)}>
          {/* Icon source: https://www.s-ings.com/typicons/ */}
          <svg width="1.5vw" height="1.5vw" baseProfile="tiny" version="1.2" viewBox="0 0 24 24" className={isFavourite ? 'favourited' : ''}>
            <path d="M3.1 11.3l3.6 3.3-1 4.6c-.1.6.1 1.2.6 1.5.2.2.5.3.8.3.2 0 .4 0 .6-.1 0 0 .1 0 .1-.1l4.1-2.3 4.1 2.3s.1 0 .1.1c.5.2 1.1.2 1.5-.1.5-.3.7-.9.6-1.5l-1-4.6c.4-.3 1-.9 1.6-1.5l1.9-1.7.1-.1c.4-.4.5-1 .3-1.5s-.6-.9-1.2-1h-.1l-4.7-.5-1.9-4.3s0-.1-.1-.1c-.1-.7-.6-1-1.1-1-.5 0-1 .3-1.3.8 0 0 0 .1-.1.1L8.7 8.2 4 8.7h-.1c-.5.1-1 .5-1.2 1-.1.6 0 1.2.4 1.6z"/>
          </svg>
        </FavouriteButton>
        <TitleContainer>{title}</TitleContainer>
        <DescContainer dangerouslySetInnerHTML={{__html: unescapeHtml(body)}}></DescContainer> { /*  TODO: possibly implement sanitizing script that makes sure the only html elements are <ul>, <li>, and <strong> */ }
        { /*  ^^ Not really sure what the best way to sanitize this and make it safe without expending lots of effort with parsing the HTML body it returns, but the API is trusted so this should be safe */ }
      </ComponentContainer>
    )}
  </ItemsContext.Consumer>
));

export default posed(withTheme(NoAnimItemCard))(CardAnim);
