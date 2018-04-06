import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('HEADER: should render correctly', () => {
  const component = shallow(<Header />);
  expect(component).toMatchSnapshot();
});

test('should have correct header text', () => {
  const component = shallow(<Header />);
  expect(component.find('h1').text()).toBe('Expensify'); 
})

