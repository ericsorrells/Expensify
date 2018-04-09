import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

let startAddExpense, component, history;
beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  component = shallow(<AddExpense startAddExpense={startAddExpense} history={history} />)
});

test('should render correctly', () => {
  expect(component).toMatchSnapshot();
});

test('should handle onSubmit()', () => {
  component.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
});