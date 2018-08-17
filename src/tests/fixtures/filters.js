import moment from 'moment';

const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const altfilters = {
    text: 'Bills',
    sortBy: 'amount',
    startDate: moment(0),
    endDate: moment(0).add('2', "day")
}

export { filters, altfilters }
