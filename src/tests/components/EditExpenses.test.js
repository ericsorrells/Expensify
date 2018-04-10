import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpense } from '../../components/EditExpense';

let editExpense, startRemoveExpense, history, component;

beforeEach(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  component = shallow(
    <EditExpense
      editExpense={editExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test('it renders correcty', () => {
  const component = shallow(<EditExpense />)
  expect(component).toMatchSnapshot();
});

test('onSubmit works correctly', () => {
  component.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
});

test('should handle removeExpense', () => {
  component.find('button').prop('onClick')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[2]);
});