// Object destructuring

// const person = {
//     name: 'Taras',
//     age: 39,
//     location: {
//         city: 'Chicago',
//         temp: 20
//     }
// };

// const {name: firstName = 'Anonymuos', age} = person;
// const {city, temp: temperature} = person.location;
// console.log(`${firstName} is ${age}.`);
// console.log(`It is ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName);


// Array destructuring

// const address = ['19 Lobanovskogo', 'Kiev', 'Ukraine', '08135'];

// const [, city, state, , some = 'default value'] = address;

// console.log(`You are in ${city} ${state}. ${some}`);

const item = ['cofee (hot)', 2, 2.5, 2.75];
const [itemNmae, , l, ] = item;
console.log(`A medium ${itemNmae} costs ${l} $.`)