import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
        default:
            return state
    }
    return
}

const setTextFilter = (text) => ({
    type: 'SET_TEXT_FILTER',
    text
})

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

const setStartDate = (date) => ({
    type: 'SET_START_DATE',
    date,
})

const setEndDate = (date) => ({
    type: 'SET_END_DATE',
    date,
})
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.date
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state
    }
    return
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDataMatch = typeof startDate !== 'number' || expense.createAt >= startDate;
        const endDataMatch = typeof endDate !== 'number' || expense.createAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDataMatch && endDataMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 : -1
        }else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1
        }
    })
}
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filter: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpense = getVisibleExpenses(state.expenses, state.filter)
    console.log(visibleExpense)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createAt:-2000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Rent', amount: 200, createAt:-1000 }))
//
// store.dispatch(removeExpense({ id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))
// //
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter(''))
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//
store.dispatch(setStartDate(0))
// store.dispatch(setStartDate());
store.dispatch(setEndDate(999));

const demoState = {
    expenses: [{
        id: 'a',
        description: 'Lambetr',
        note: 'final,' ,
        amount: 56500,
        createAt: 0
    }],
    filter: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}
