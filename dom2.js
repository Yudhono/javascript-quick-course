//get element by class name
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello2';
items[2].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

//change all background color
for(var i = 0; i < items.length; i++){
    items[i].style.backgroundColor = '#2c2c2c';
}

//get element by tagname
var li = document.getElementsByTagName('li');
for (var i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = 'yellow';
}

//Query selector
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'hello word';

var submit = document.querySelector('input[type="submit"]');
submit.value = 'send';

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color = 'blue';

var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.color = 'coral';

//query selector all
var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'jsr';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}