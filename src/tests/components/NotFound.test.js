import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../../components/NotFound';

test('<NotFound/>: should render correctly with expenses', () => {
  const component = shallow(<NotFound />);
  expect(component).toMatchSnapshot();
});