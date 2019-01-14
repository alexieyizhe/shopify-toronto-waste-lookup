import { css } from 'styled-components';

const displaySizes = {
  large: 1024,
  mid: 832,
  small: 640
};

// Create media template for responsive designs
export const mediaSize = Object.keys(displaySizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${displaySizes[label] / 16}em) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
