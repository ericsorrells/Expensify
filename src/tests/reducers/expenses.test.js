import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

const defaultState = [];

test('INIT: should set default state', () => {
  const action = { type: '@@INIT'}
  const state = expensesReducer(defaultState, action);
  expect(state).toEqual(defaultState);
});

test('REMOVE_EXPENSE: removes expense by id', () => {
  const action = { 
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('REMOVE_EXPENSE: should not remove an expense if id not found', () => {
  const action = { 
    type: 'REMOVE_EXPENSE',
    id: '-1' 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('ADD_EXPENSE: should add expense', () => {
  const newExpense = {
    id: '4',
    description: 'Butter',
    note: 'Some New Butter',
    amount: 1950,
    createdAt: 0
  }
  const action = { 
    type: 'ADD_EXPENSE',
    expense: newExpense 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toHaveLength(4);
});

test('EDIT_EXPENSE: should edit expense with correct id', () => {
  const action = { 
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: { note: 'I Have Some Gum'} 
  };
  const state = expensesReducer(expenses, action);
  expect(state[0].note).toBe('I Have Some Gum');
});

test('EDIT_EXPENSE: should not edit expense when expense not found', () => {
  const action = { 
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: { note: 'I Have Some Gum'} 
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
});