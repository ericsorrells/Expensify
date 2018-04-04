import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDashboard = () => (
  <div>
    <h3>Expense Dashboard</h3>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboard;