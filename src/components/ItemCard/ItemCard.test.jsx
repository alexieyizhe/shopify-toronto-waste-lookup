import React from 'react';
import renderer from 'react-test-renderer';
import ItemCard from './ItemCard';

/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(<ItemCard title="This is a test title" body={["This is a test body"]}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
