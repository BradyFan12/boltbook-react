import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Feed } from '../';

describe('', () => {
  it('should render the Feed correctly', () => {
    const tree = renderer.create(<Feed />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});