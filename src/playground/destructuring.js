// const person = {
//     name: 'Lambert',
//     age: 28,
//     location: {
//         city: 'Beijing',
//         temp: 27
//     }
// }
//
// const { name, age } = person;
// console.log(`${name} id ${ age }`)
//
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan',
//     publisher: {
//         name: 'Joe',
//         location: ''
//     }
// }
//
// const { name, loca: location = 'A' } = book.publisher;
// console.log(`publisher is ${ name } location is ${ location }`)

const address  = ['1299 S Juniper Street', 'Chaoyang', 'Beijing', '100056'];

const [street, , city = 'Datong', zip] = address;

console.log(`You are in ${ street } ${ city }`);

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];
const [name, , price] = item
console.log(`A medium ${ name } is ${ price }`)
