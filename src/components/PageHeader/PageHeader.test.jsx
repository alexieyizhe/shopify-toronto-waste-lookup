import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { siteTheme } from '../../utils/siteData';

import PageHeader from './PageHeader';


/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={siteTheme}>
      <PageHeader title="This is a test title" />
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
