import React from 'react';
import { shallow } from 'enzyme';
import { LogIn } from '../../components/LogIn';

test('<LogIn />: renders correctly', () => {
  const component = shallow(<LogIn startLogin="() => {}"/>);
  expect(component).toMatchSnapshot();
});

test('should call startLogIn on button click', () => {
  const startLogin = jest.fn();
  const component = shallow(<LogIn startLogin={startLogin} />);
  component.find('button').simulate('click')
  expect(startLogin).toHaveBeenCalled(); 
})


