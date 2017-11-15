import React from 'react';
import renderer from 'react-test-renderer';
import { Account } from '../';

describe('Account', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Account />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});