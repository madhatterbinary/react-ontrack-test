/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByClass } from '../tests/TestUtils';
import BookBox from './BookBox';

configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<BookBox { ...props } />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders Book box', () => {
  const wrapper = setup();
  const bookBox = findByClass(wrapper, 'box');
  expect(bookBox.length).toBe(1);
});
