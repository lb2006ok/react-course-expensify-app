import filterReducer from '../../reducers/filter';
import moment from "moment";

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    })
})

test('should setup sort by amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' } );
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    })
})

test('should setup sort by date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined,
    }
    const state = filterReducer(undefined, { type: 'SORT_BY_DATE' } );
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    })
})

test('should setup text filter', () => {
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER' } );
    expect(state).toEqual({
        text: undefined,
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    })
})

test('should setup start date filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate:undefined,
        endDate: moment().endOf("month"),
    }
    const state = filterReducer(currentState, { type: 'SET_START_DATE', date: moment().startOf("month")  } );
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    })
})

test('should setup end date filter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: undefined,
    }
    const state = filterReducer(currentState, { type: 'SET_END_DATE', date: moment().endOf("month") } );
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf("month"),
        endDate: moment().endOf("month"),
    })
})


