import { addExpense, editExpense, removeExpense } from "../../actions/expenses";
import uuid from 'uuid';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('123123', {
        note: 'New note value'
    });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123123',
        updates: {
            note: 'New note value'
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expense = {
        description: 'Rent',
        amount: 1000,
        createAt: 1000,
        note: 'Last Rent'
    }
    const action = addExpense(expense);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expense,
            id: expect.any(String)
        }
    })
})
//
test('should setup add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            createAt: 0,
            id: expect.any(String)
        }
    })
})
