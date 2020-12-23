// let -> can re-assign value
// const -> can't direct re-assign
// always use const unless you know when you gonna re-assing

// DATA TYPE: String, Numbers, Boolean, null,  undefined

const name = 'afsana';
const age = 23;

// concatenation
const hello = `my name is ${name} and i am ${age}` 
console.log(hello);

const s = 'hello world'
// to uppercase a string
console.log(s.toUpperCase());

const category = 'autos, agriculture, sports, business'
// split a strings
categorySingle = category.split(', ');

console.log(categorySingle);

//Arrays - variable that hold multiple value
// declare an array using a constructor
const number = new Array(1, 2, 3, 4, 5);

// declare an array as usual
const fruits = ['apples', 'oranges', 'pears'];
// access all value in array
console.log(fruits);
// access single value in array
console.log(fruits[0]);
// add an value to an arrays
// menggunakan cara ini kurang baik karena kita mungkin
// ga tau seberapa panjang array nya
fruits[3] = 'grapes';
console.log(fruits);

// cara 2 untuk memasukkan nilai pada array
fruits.push('mangoes');
console.log(fruits);

// add value to the beginning of array
fruits.unshift('strawberries');
console.log(fruits);

// delete last value in array
fruits.pop();
console.log(fruits);

// get index of a value in arrays
const iniIndex = fruits.indexOf('oranges');

console.log('ini adalah index dari oranges: ' + iniIndex);
