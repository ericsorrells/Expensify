import React from 'react';
import { shallow, mount } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses'

test('ExpenseSummary: displays nothing when no expenses', () => {
  const component = shallow(<ExpenseSummary expenses={ [] }/>)
  expect(component).toMatchSnapshot()
});

test('ExpenseSummary: displays correct Summary when given expenses', () => {
  const component = shallow(<ExpenseSummary expenses={expenses}/>)
  expect(component).toMatchSnapshot();
});

