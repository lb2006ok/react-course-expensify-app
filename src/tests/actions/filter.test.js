import moment from 'moment';
import {setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount} from "../../actions/filter";

test('should generate set start date action object ', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('should generate set text action object', () => {
    const action = setTextFilter('123');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '123'
    })
})

test('should generate set sort by amount action object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate set sort by date action object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
