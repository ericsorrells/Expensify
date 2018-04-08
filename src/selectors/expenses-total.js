import moment from 'moment';

const getExpenseTotal = (expenses) => {
  return expenses
    .map((expense) => expense.amount)
    .reduce(getSum, 0);
}

function getSum(total, num) {
  return total + num;
}

export default getExpenseTotal;