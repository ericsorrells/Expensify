import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('removeExpense()', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({ type: 'REMOVE_EXPENSE', id: '123abc'}) 
});

test('editExpense()', () => {
  const action = editExpense(3, { note: 'New Note'});
  expect(action).toEqual({ 
    type: 'EDIT_EXPENSE', 
    id: 3, 
    updates: {
      note: 'New Note'
    }
  })
});

test('addExpense(): default values', () => {
  const expenseData = {};
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
});

test('addExpense(): generates correct values', () => {
  const expenseData = { description: 'Rent', note: 'my note', amount: 100, createdAt: 1000 }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})