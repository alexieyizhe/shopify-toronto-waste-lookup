import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { ItemsContext } from '../../utils/siteContext';
import { siteTheme, FetchStateEnum } from '../../utils/siteData';

import SearchResults from './SearchResults';


ItemsContext.Consumer = jest.fn((props) => props.children({ appStatus: FetchStateEnum.ERROR }));

/* eslint-disable no-undef */
it.skip('renders correctly', () => {
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
