import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('<ExpenseList/>: should render correctly with expenses', () => {
    const component = shallow(<ExpenseList expenses={expenses} />);
    expect(component).toMatchSnapshot();
});

test('should render correctly with no expenses', () => {
  const component = shallow(<ExpenseList expenses={[]} />);
  expect(component).toMatchSnapshot();
})