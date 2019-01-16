import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { siteTheme } from '../../utils/siteData';

import SearchFavourites from './SearchFavourites';

/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={siteTheme}>
      <SearchFavourites>
        <div>test div</div>
        <a href="test thing thing">test link</a>
        <div>
          <div>
            wogewog
            <span>
              wgwegww????!@$!@
            </span>
          </div>
        </div>
      </SearchFavourites>
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
