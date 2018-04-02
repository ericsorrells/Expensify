import React from 'react';

// const EditExpense = () => (
//   <div>EDIT EXPENSE PAGE</div>
// );
const EditExpense = (props) => {
  console.log('PROPS', props)
    return (
      <div>
        <div>EDIT EXPENSE PAGE</div>
        <br/>
        <div>Editing Expense Number {props.match.params.id}</div>
      </div>
    )
  };
export default EditExpense;