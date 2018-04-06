import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form', () => {
  const component = shallow(<ExpenseForm />)
  expect(component).toMatchSnapshot();
});

test('renders correctly with data', () => {
  const component = shallow(<ExpenseForm expense={expenses[0]} />) 
  expect(component).toMatchSnapshot();
})