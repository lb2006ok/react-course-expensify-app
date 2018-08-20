import selectorExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
    const res = selectorExpensesTotal([]);
    expect(res).toBe(0)
})

test('should correctly add up a single expense', () => {
    const res = selectorExpensesTotal([expenses[0]]);
    expect(res).toBe(195)
})

test('should correctly add up a single expense', () => {
    const res = selectorExpensesTotal(expenses);
    expect(res).toBe(24195)
})
