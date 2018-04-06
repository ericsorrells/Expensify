import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';

const item = { 
  id: '1', 
  description: 'some description', 
  amount: 100, 
  createdAt: 0
}

test('<ExpenseListItem: renders correctly w props', () => {
  const component = shallow(<ExpenseListItem {...item} />);
  expect(component).toMatchSnapshot();
})