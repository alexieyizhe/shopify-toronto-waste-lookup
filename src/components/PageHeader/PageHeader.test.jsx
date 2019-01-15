import React from 'react';
import renderer from 'react-test-renderer';
import PageHeader from './PageHeader';

/* eslint-disable no-undef */
it('renders correctly', () => {
  const tree = renderer.create(<PageHeader title="This is a test title" />).toJSON();
  expect(tree).toMatchSnapshot();
});
