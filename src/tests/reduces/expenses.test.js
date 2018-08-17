import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from "moment";

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([])
})

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            id: '1',
            description: 'Guom',
            amount: 195,
            note: '',
            createAt: moment(0).subtract(4, "day").valueOf()
        }
    }
    const state = expensesReducer(undefined, action);
    expect(state).toEqual([
        {
            id: '1',
            description: 'Guom',
            amount: 195,
            note: '',
            createAt: moment(0).subtract(4, "day").valueOf()
        }
    ])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[0].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        expenses[1],
        expenses[2]
    ])
})

test('should remove expense by id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should edit expense by id', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            description: 'Rent-super',
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[1].description).toBe('Rent-super')
})

test('should not edit expense if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            description: 'Rent-super',
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})
