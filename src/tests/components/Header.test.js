import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('HEADER: should render correctly', () => {
  const component = shallow(<Header startLogout={() => {}} />);
  expect(component).toMatchSnapshot();
});

test('should have correct header text', () => {
  const component = shallow(<Header startLogout={() => {}} />);
  expect(component.find('h1').text()).toBe('Expensify'); 
})

test('should call startLogOut on button click', () => {
  const startLogout = jest.fn();
  const component = shallow(<Header startLogout={startLogout} />);
  component.find('button').simulate('click')
  expect(startLogout).toHaveBeenCalled(); 
})

