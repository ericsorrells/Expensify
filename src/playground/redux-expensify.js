import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount, 
    createdAt
  }
})

const removeExpense= ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})



const setTextFitler = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
}) 

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense 
      ]
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id); 
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        };
      });  
    default:
    return state;
  }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    default: 
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',  
  startDate: undefined,
  endDate: undefined 
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log('STORE_SUBSCR:', store.getState())
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffe', amount: 400}));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 10000 }))

store.dispatch(setTextFitler( 'My New Text' ));
const demoState = {
  expenses: [{
    id: 1,
    description: 'Jan Rent Payment',
    note: 'Finaly payment for my rent',
    amount: 54500,
    createdAt: 0  
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',   // date or amount
    startDate: undefined,
    endDate: undefined
  }
}


