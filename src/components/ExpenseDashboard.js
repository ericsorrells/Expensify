import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'
import ExpenseSummary from './ExpenseSummary';

const ExpenseDashboard = () => (
  <div>
    <h3>Expense Dashboard</h3>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;