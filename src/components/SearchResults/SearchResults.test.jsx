import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import { ItemsContext } from '../../utils/siteContext';
import { siteTheme, FetchStateEnum } from '../../utils/siteData';


import SearchResults from './SearchResults';


/* eslint-disable no-undef */
ItemsContext.Consumer = jest.fn((props) => props.children({ appStatus: FetchStateEnum.ERROR }));

it.skip('renders correctly', () => { // skip test becase react-pose needs ref to be forwarded, limitations with jest don't allow for this (https://popmotion.io/blog/20181101-react-pose-4-forwardref/)
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
