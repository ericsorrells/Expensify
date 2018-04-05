import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();
console.log('MOM:', now.format('MMM Do, YYYY'));
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.note ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({}))
  }

  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({createdAt: createdAt}))
    }
  }  

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }

  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please Provide Description And Amount'}))
    } else {
      this.setState(() => ({ error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      }) 
    }
  }

  render(){
    return(
     <div>
        <form onSubmit={this.onSubmit}>
          { this.state.error && <h3>{this.state.error}</h3>}
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />

          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />

          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          
          <textarea
            value={this.state.note}
            placeholder="Add a note!"
            onChange={this.onNoteChange}
          />
          
          <button>Submit</button>

        </form>
      </div> 
    )
  }  
}

export default ExpenseForm;