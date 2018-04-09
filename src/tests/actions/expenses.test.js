import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureStore([thunk]);

beforeEach((done) => {
  let expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expenses)
    .then(() => done());
});

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

// test('addExpense(): default values', () => {
//   const expenseData = {};
//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     }
//   })
// });

test('addExpense(): generates correct values', () => {
  const expenseData = expenses[2];
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should add expense to DB and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'mouse',
    amount: 3000,
    note: 'This is my new mouse',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value'); // ret Promise
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done()
    });
}); 

test('should add epense with defaults to DB and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefaults
        }
      });

      return database.ref(`expenses/${actions[0].expense.id}`).once('value'); // ret Promise
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefaults);
      done()
    });
});

test('should setup set expense action with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});