import React from 'react';
import renderer from 'react-test-renderer';
import SearchFavourites from './SearchFavourites';

/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(<SearchFavourites />).toJSON();
  expect(tree).toMatchSnapshot();
});
