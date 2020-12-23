// ARRAYS OF OBJECT

const todos = [
    {
        id: 1, 
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appt',
        isCompleted: false
    },
];

// access value in arrays of object
console.log(todos[1].text);

// JSON
// convert array of object to JSON

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// LOOP
// for

for(let i = 0; i < 10; i++){
    console.log('aku ke: ' + i);
}

// while
let i = 0;
while(i < 10){
    console.log('ini while loop ke:  ' + i);

    i++;
}

// Loop throung array
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

for(let todo of todos){
    console.log(todo);
}

// high order array method
// forEach, map, filter
todos.forEach(function(todo) {
    console.log(todo);
});

// map return a new array based on previous 
// array
const todoText = todos.map(function(todo) {
    return todo.text;
});

const todoID = todos.map(function(todo) {
    return todo.id;
});

console.log(todoText);
console.log(todoID);

// filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
});

console.log(todoCompleted);

const todoCompletedText = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo2) {
    return todo2.text;
})

console.log(todoCompletedText);