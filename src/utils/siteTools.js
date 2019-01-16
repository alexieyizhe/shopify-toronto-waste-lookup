import { css, createGlobalStyle } from 'styled-components';

const displaySizes = {
  tablet: 1024,
  mobile: 600
};

// Create media template for responsive designs
export const mediaSize = Object.keys(displaySizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${displaySizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});


export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }
`;
