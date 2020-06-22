/* eslint-disable no-undef */
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByClass } from '../tests/TestUtils';
import TwitterBoxItem from './TwitterBoxItem';

configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<TwitterBoxItem { ...props } />);
  if (state) wrapper.setState(state);
  return wrapper;
};

test('renders twitter box item', () => {
  const wrapper = setup();
  const twitterBoxItem = findByClass(wrapper, 'item');
  expect(twitterBoxItem.length).toBe(1);
});
