import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render the ExpenseForm currectly', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot();
})

test('should render the ExpenseForm with expenses[0]', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invaild form submission', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount if value input', () => {
    const value = '10.22';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
    const value = '10.555';
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault : () => {}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createAt: expenses[0].createAt

    });
})

// test('should set new date on date change', () => {
//     const now = moment()
//     const wrapper = shallow(<ExpenseForm/>);
//     wrapper.find('SingleDatePicker').prop('onDateChange')(now);
//     expect(wrapper.state('createAt')).toEqual(now)
// })
//
// test('should set calender focus on change', () => {
//     const focused = true;
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
//     expect(wrapper.state('calenderFocus')).toBe(focused);
// })
