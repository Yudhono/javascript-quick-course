//Single element selectors
document.getElementById('my-form');
const form = document.getElementById('my-form');

console.log(document.getElementById('my-form'));
console.log(form);

const container = document.querySelector('.container'); 

console.log(container);

//Multiple element selectors
const items = document.querySelectorAll('.item');

console.log(items);

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'af';
ul.lastElementChild.innerHTML = '<H1>Hello</H1>'

const btn = document.querySelector('.btn');
btn.style.background = 'red'; //change background color of button by red