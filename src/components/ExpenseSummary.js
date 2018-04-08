import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import getExpenseTotal from '../selectors/expenses-total';

const ExpenseSummary = (props) => {
  const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
  const expenseTotal = numeral(getExpenseTotal(props.expenses) / 100).format('$0,0.00');
  return (
    <div>
      <h3>Viewing {props.expenses.length} {expenseWord} totaling {expenseTotal}</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters) 
  }
} 

export { ExpenseSummary };
export default connect(mapStateToProps)(ExpenseSummary);