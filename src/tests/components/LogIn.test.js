import React from 'react';
import { shallow } from 'enzyme';
import LogIn from '../../components/LogIn';

test('<LogIn />: renders correctly', () => {
  const component = shallow(<LogIn />);
  expect(component).toMatchSnapshot();
})

