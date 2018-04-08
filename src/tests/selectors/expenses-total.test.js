import moment from 'moment';
import getExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('getExpenseTotal(): add multiple expenses correctly', () => {
  const total = getExpenseTotal(expenses);
  expect(total).toBe(114195);
});

test.only('should return 0 with no expenses', () => {
  const total = getExpenseTotal([]);
  expect(total).toEqual(0)
});

test('should handle a single expense', () => {
  const total = getExpenseTotal([expenses[0]]);
  expect(total).toEqual(195);
})