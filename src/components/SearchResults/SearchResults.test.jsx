import React from 'react';
import renderer from 'react-test-renderer';
import SearchResults from './SearchResults';

/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(<SearchResults />).toJSON();
  expect(tree).toMatchSnapshot();
});
