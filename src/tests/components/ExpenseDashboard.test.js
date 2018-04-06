import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboard from '../../components/ExpenseDashboard';

test('<ExpenseDashboard/>: should render correctly with expenses', () => {
  const component = shallow(<ExpenseDashboard />);
  expect(component).toMatchSnapshot();
});