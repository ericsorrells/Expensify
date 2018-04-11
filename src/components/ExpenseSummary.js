import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';
import getExpenseTotal from '../selectors/expenses-total';

const ExpenseSummary = (props) => {
  const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
  const expenseTotal = numeral(getExpenseTotal(props.expenses) / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> {expenseWord} totaling <span>{expenseTotal}</span></h1>
        <div className="page-header__actions">
          <Link to="/create" className="button">Add Expenses</Link>
        </div>
      </div>
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