import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../../actions/filters';
import moment from 'moment';

test('setStartData(): ', () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('setEndData(): ', () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  }) 
})

test('sortByAmount()', () => {
  const action = sortByAmount(moment(0))
  expect(action).toEqual({ type: 'SORT_BY_AMOUNT' }) 
})

test('sortByDate()', () => {
  const action = sortByDate(moment(0))
  expect(action).toEqual({ type: 'SORT_BY_DATE' }) 
})


test('sortTextFilter(): Sets Default Values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  }) 
})

test('sortTextFilter(): Sets Custom Values', () => {
  const action = setTextFilter( 'Some Text' );
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'Some Text'
  }) 
})
