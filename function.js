// function declaration
function addNumbs(num1, num2) {
    console.log(num1 + num2);
}

// function call
addNumbs(2, 5);

// function declaration with defult value
function addNumbs2(num1 = 1, num2 = 1) {
    return num1 + num2;
}

// function call
addNumbs2(10, 10);

console.log(addNumbs2(20, 21));

// arrow function #1
const addNumbs3 = (num1 = 1, num2 = 2) => {
    return num1 + num2;
}

// arrow function #2
const addNumbs4 = (num1 = 1, num2 = 2) => num1 + num2;

// arrow function #3
const addNumbs5 = num1 => num1 + 6;

console.log(addNumbs4(2, 2));
console.log(addNumbs5(4));