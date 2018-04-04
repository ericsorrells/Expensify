import React from 'react';

class ExpenseForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
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

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  }

  render(){
    return(
     <div>
        <form>

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