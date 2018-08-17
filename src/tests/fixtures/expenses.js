import moment from "moment";

export default [{
    id: '1',
    description: 'Guom',
    amount: 195,
    note: '',
    createAt: moment(0).subtract(4, "day").valueOf()
},{
    id: '2',
    description: 'Rent',
    amount: 20000,
    note: '',
    createAt: moment(0).add(4, "day").valueOf()
},{
    id: '3',
    description: 'Coffee',
    amount: 4000,
    note: '',
    createAt: moment(0)
}]
