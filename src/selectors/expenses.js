import moment from 'moment'
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const createAtMoment = moment(expense.createAt);
        const startDataMatch = startDate ? startDate.isSameOrBefore(createAtMoment, 'day') : true;
        const endDataMatch = endDate ? endDate.isSameOrAfter(createAtMoment, 'day') : true;
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
