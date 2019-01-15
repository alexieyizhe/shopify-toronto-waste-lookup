import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { siteTheme } from '../../utils/siteData';

import ItemCard from './ItemCard';

/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={siteTheme}>
      <ItemCard title="This is a test title" body={["This is a test body"]} />
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
