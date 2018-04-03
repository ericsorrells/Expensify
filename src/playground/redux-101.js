import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return {
        count: state.count + incrementBy
      } 
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return {
        count: state.count - decrementBy
      }  
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }  
    default: 
      return state
  }
});

// incrementing
const unsubscribe = store.subscribe(() => {
  console.log('STATE: ', store.getState());
})

store.dispatch({ 
  type: 'INCREMENT',
  incrementBy: 5
})

store.dispatch({ type: 'INCREMENT' })

// reset
store.dispatch({ type: 'RESET' })

// decrement
store.dispatch({ type: 'DECREMENT' })

store.dispatch({ 
  type: 'DECREMENT',
  decrementBy: 5
})

store.dispatch({
  type: 'SET',
  count: 101
})
