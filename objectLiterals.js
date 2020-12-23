// OBJECT LITERALS
// -> object literals is key value pairs

const person = {
    firstName: 'afsana',
    lastName: 'nadhila',
    age: 23,
    hobbies: ['read', 'sports', 'nature'],
    address: {
        street: 'jl. sultan agung, no. 13',
        city: 'malang',
        state: 'ID'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName, person.age);
console.log(person.hobbies[2]);
console.log(person.address.street);

// destructuring
// mengeluarkan variable dari object literals
const { firstName, lastName, address: { city }} = person;

console.log(lastName);
console.log(city);

// adding properties
person.email = 'afsana@gmail.com';

console.log(person);