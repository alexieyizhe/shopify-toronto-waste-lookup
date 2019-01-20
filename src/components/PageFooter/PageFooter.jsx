import React from 'react';
import styled from 'styled-components';

/* --- STYLES & ANIMATIONS --- */
const ComponentContainer = styled.div`
  background-color: grey;
  width: 100%;
  height: auto;

  padding: 1.5vh 0;

  background-image: ${props =>
    `linear-gradient(to right, ${props.theme.colors.primary}, ${
      props.theme.colors.secondary
    })`};

  display: flex;

  & > div.pageCredits {
    margin: auto;

    color: white;
    font-size: 0.6em;
    text-align: center;

    & > a {
      color: white;
    }
  }
`;

/* --- Component [FUNCTIONAL] --- */
export default () => (
  <ComponentContainer>
    <div className="pageCredits">
      {/* eslint-disable-line */}
      Created with ❤️ by{' '}
      <a
        href="https://github.com/alexieyizhe"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alex Yizhe Xie
      </a>{' '}
      for the Shopify Front End Challenge (Summer 2019)
    </div>
  </ComponentContainer>
);
