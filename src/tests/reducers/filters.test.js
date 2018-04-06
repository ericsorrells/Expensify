import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const defaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

test('INIT: should set up correct default state', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('SORT_BY_AMOUNT: should set sortBy to "amount"', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
})

test('SORT_BY_DATE: should set sortBy to "date"', () => {
  const currentState = {
    ...defaultState,
    sortBy: 'amount'
  }

  const action = {type: 'SORT_BY_DATE'}
  const state = filtersReducer(currentState, action)
  expect(state.sortBy).toBe('date');
});

test('SET_TEXT_FILTER: should set "text" filter', () => {
  const action = { type: 'SET_TEXT_FILTER', text: 'Some New Text' };
  const state = filtersReducer(defaultState, action)
  expect(state.text).toBe('Some New Text');
});

test('SET_START_DATE: should set "startDate" filter', () => {
  const currentTime = moment();
  const action = { type: 'SET_START_DATE', startDate: currentTime }
  const state = filtersReducer(defaultState, action);
  expect(state.startDate).toEqual(currentTime);
});

test('SET_END_DATE: should set "endDate" filter', () => {
  const futureDate = moment();
  const action = { type: 'SET_END_DATE', endDate: futureDate }
  const state = filtersReducer(defaultState, action)
  expect(state.endDate).toEqual(futureDate);
});
