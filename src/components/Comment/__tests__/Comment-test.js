import React from 'react';
import { shallow, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Comment } from '../';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

test('should render as expected', () => {
  const component = shallow(<Comment />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});