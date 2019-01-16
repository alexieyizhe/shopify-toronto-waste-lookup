import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { siteTheme } from '../../utils/siteData';

import { NoAnimItemCard } from './ItemCard';

/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(
    <ThemeProvider theme={siteTheme}>
      <NoAnimItemCard key='testCard1' title="This is a test title" body="&lt;ul&gt; \n &lt;li&gt;Empty and rinse (if necessary and possible) this item before placing it in the&amp;nbsp;&lt;strong&gt;Blue Bin&lt;\/strong&gt;.&lt;\/li&gt; \n&lt;\/ul&gt;" ith={4} isFavourite/>
    </ThemeProvider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
