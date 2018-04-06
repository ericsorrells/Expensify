import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render expense form', () => {
  const component = shallow(<ExpenseForm />)
  expect(component).toMatchSnapshot();
});

test('renders correctly with data', () => {
  const component = shallow(<ExpenseForm expense={expenses[0]} />) 
  expect(component).toMatchSnapshot();
});

test('should render error on invalid form submission', () => {
  const component = shallow(<ExpenseForm />);
  expect(component).toMatchSnapshot()
  component.find('form').simulate('submit', { 
    preventDefault: () => { }
  });
  expect(component.state('error').length).toBeGreaterThan(0);
  expect(component).toMatchSnapshot()
});

test('should set description on input change', () => {
  const value = 'New Description';
  const component = shallow(<ExpenseForm />);
  component.find('input').at(0).simulate('change', { target: { value } })
  expect(component.state('description')).toBe(value);
});

test('should set note on text area change', () => {
  const value ='Some long text';
  const component = shallow(<ExpenseForm />);
  component.find('textarea').simulate('change', { target: { value } });
  expect(component.state('note')).toBe(value);
});

test('should set amount with valid data', () => {
  const value = '12.12';
  const component = shallow(<ExpenseForm />);
  component.find('input').at(1).simulate('change', { target: { value } });
  expect(component.state('amount')).toBe(value);
});

test('should not set amount if data invalid', () => {
  const value = '12.122';
  const component = shallow(<ExpenseForm />);
  component.find('input').at(1).simulate('change', { target: { value } });
  expect(component.state('amount')).not.toBe(value);
});

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const component = shallow(
    <ExpenseForm
      expense={expenses[0]}
      onSubmit={onSubmitSpy}
    />
  )
  component.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(component.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount:      expenses[0].amount,
    note:        expenses[0].note,
    createdAt:    expenses[0].createdAt
  })
});

test('should set new date on date change', () => {
  const now = moment();
  const component = shallow(<ExpenseForm />);
  component.find('SingleDatePicker').prop('onDateChange')(now);
  expect(component.state('createdAt')).toEqual(now);
});

test('should set calendar focus on change', () => {
  const component = shallow(<ExpenseForm />);
  component.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
  expect(component.state('calendarFocused')).toBe(true);
});
