import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

class EditExpense extends React.Component {
  onSubmit = (expense) => {
      this.props.startEditExpense(this.props.expense.id, expense);
      this.props.history.push('/');
  }
  
  onClick = () => {
    this.props.startRemoveExpense(this.props.expense);
    this.props.history.push('/');
  }

  render() {
    return(
      <div>
        <div className="page-header">
          <h1 className="page-header__title content-container">Edit Expenses</h1>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button onClick={this.onClick} className="button button--secondary">
            Remove Expense
        </button>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: (expense) => dispatch(startRemoveExpense(expense)) 
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export { EditExpense };
export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);