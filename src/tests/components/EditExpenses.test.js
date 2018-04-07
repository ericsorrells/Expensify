import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'


test('it renders correcty', () => {
  const component = shallow(<EditExpense />)
  expect(component).toMatchSnapshot();
});

test('onSubmit works correctly', () => {
  const editExpense = jest.fn();
  const history = { push: jest.fn() };
  const component = shallow(
    <EditExpense 
      expense={expenses[0]} 
      editExpense={editExpense} 
      history={history}
    />
  )
  component.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
});

test('should handle removeExpense', () => {
  const removeExpense = jest.fn();
  const history = { push: jest.fn() };
  const component = shallow(
    <EditExpense 
      expense={expenses[0]} 
      removeExpense={removeExpense} 
      history={history}
    />
  )
  component.find('button').prop('onClick')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(expenses[0]);
});