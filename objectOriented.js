// constructor function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    this.getBirthyear = function() {
        return this.dob.getFullYear();
    }

    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}


// Instantiate object
const Person1 = new Person('Afsana', 'nadhila', '4-3-1997');
const Person2 = new Person('Fienny', 'angelina', '5-3-1997');

console.log(Person1);
console.log(Person2.dob);
console.log(Person2.dob.getFullYear());

console.log(Person1.getBirthyear());
console.log(Person1.getFullName());

// prototyping
function Animal(firstName, lastName, sumOfFeet, env, dob) {
    this.firstName = firstName;
    this.lastName  = lastName;
    this.sumOfFeet = sumOfFeet;
    this.env = env;
    this.dob = new Date(dob);
}

//prototype function
Animal.prototype.getBirthyear = function(){
    return this.dob.getFullYear();
}

Animal.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

const Animal1 = new Animal('bebek', 'betutu', 2, 'amfibi', '4-4-2012');
console.log(Animal1);
console.log(Animal1.getFullName());
console.log(Animal1.getBirthyear());

//ES6
class Car {
    constructor(carBrand, carType, dateReleased) {
        this.carBrand = carBrand;
        this.carType = carType;
        this.dateReleased = new Date(dateReleased);
    }

    getYear() {
        return this.dateReleased.getFullYear();
    }

    getFullName() {
        return `${this.carBrand} ${this.carType}`;
    }
}

// instansiasi
const mobil1 = new Car('Nissan', 'Skyline', '4-4-1999');

console.log(mobil1.getYear());
console.log(mobil1.getFullName());