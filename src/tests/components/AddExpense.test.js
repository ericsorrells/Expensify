import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

let addExpense, component, history;
beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  component = shallow(<AddExpense addExpense={addExpense} history={history} />)
});

test('should render correctly', () => {
  expect(component).toMatchSnapshot();
});

test('should handle onSubmit()', () => {
  component.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
});