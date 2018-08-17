import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from "../../components/AddExpensePage";
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;
beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>);
})

test('should render addExpensePage corrently', () => {
    expect(wrapper).toMatchSnapshot()
})

// test('should handle onSubmit', () => {
//     wrapper.find('ExpenseForm').prop('addExpense')(expenses[0]);
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
//
// })
