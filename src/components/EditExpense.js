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
        <ExpenseForm
          expense={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button onClick={this.onClick }>
          Remove
        </button>
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