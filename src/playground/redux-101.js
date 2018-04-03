import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      } 
    case 'DECREMENT':
      return {
        count: state.count -1
      }  
    case 'RESET':
      return {
        count: 0
      }
    default: 
      return state
  }
});

// incrementing
console.log('STATE: ', store.getState());

store.dispatch({ type: 'INCREMENT' })
console.log('STATE: ', store.getState());

store.dispatch({ type: 'INCREMENT' })
console.log('STATE: ', store.getState());

// reset
store.dispatch({ type: 'RESET' })
console.log('STATE: ', store.getState());

// decrement
store.dispatch({ type: 'DECREMENT' })
console.log('STATE: ', store.getState());
