import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { siteTheme } from '../../utils/siteData';

import SearchResults from './SearchResults';

/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={siteTheme}>
      <SearchResults>
        <div key="testDiv">test div</div>
        <a  key="testLinkA" href="test thing thing">test link</a>
        <div key="testDiv2">
          <div>
            wogewog
            <span>
              wgwegww????!@$!@
            </span>
          </div>
        </div>
      </SearchResults>
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
