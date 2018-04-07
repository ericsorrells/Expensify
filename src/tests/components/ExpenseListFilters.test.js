import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, component;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByAmount  = jest.fn();
  sortByDate    = jest.fn();
  setStartDate  = jest.fn();
  setEndDate    = jest.fn();
  component = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
});

test('ExpenseListFilter renders correctly', () => {
  expect(component).toMatchSnapshot();  
});

test('ExpenseListFilter renders expenses with alt data correctly', () => {
  // overwrite props from above
  component.setProps({
    filters: altFilters
  })
  expect(component).toMatchSnapshot();  
});

test('should handle TextChange()', () => {
  const value = 'Rent';
  component.find('input').simulate('change', { target: { value } })
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});


test('should handle sortByDate()', () => {
  const value = 'date';
  component.find('select').simulate('change', { target: { value: 'amount' }});
  component.find('select').simulate('change', { target: { value }});
  expect(sortByDate).toHaveBeenLastCalledWith(value)
});

test('should handle sortByAmount()', () => {
  const value = 'amount'
  component.find('select').simulate('change', { target: { value }});
  expect(sortByAmount).toHaveBeenLastCalledWith(value);
});

test('should handle Date Changes', () => {
  const startDate = moment(0).add(4, 'years');
  const endDate = moment(0).add(8, 'years');
  component.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date change focus', () => {
  const calendarFocused = 'endDate';
  component.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(component.state('calendarFocused')).toBe(calendarFocused);
});