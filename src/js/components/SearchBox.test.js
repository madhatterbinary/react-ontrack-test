/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByClass } from '../tests/TestUtils';
import SearchBox from './SearchBox';

configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<SearchBox { ...props } />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders search box', () => {
  const wrapper = setup();
  const searchBox = findByClass(wrapper, 'form-group');
  expect(searchBox.length).toBe(1);
});
