import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>
    <h1>Expense List!!!</h1>
    {
      props.expenses.length === 0 ?
        (<p>No Expenses</p>) :
        (
          <div>
            {props.expenses.map((expense, index) =>
              <ExpenseListItem {...expense} key={expense.id} />
            )}
          </div>
        )
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters) 
  }
} 

export { ExpenseList };
export default connect(mapStateToProps)(ExpenseList);
