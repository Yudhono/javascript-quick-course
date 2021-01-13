var itemList = document.querySelector('#items');

//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

// parentNode and ParentElement can be used interchangeabel (dapat digunakan salah satu karena fungsinya sama)

// childNodes -> not suggested to use -> because including white space
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// firstchild -> including white space
console.log(itemList.firstChild);
// first element child
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hallo';
// last elementchild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hallo last';

// nextSiblings
console.log(itemList.nextSibling);
// nextelementsibilings
console.log(itemList.nextElementSibling);

// previous siblings
console.log(itemList.previousSibling);

// previous elementsibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent = 'yahoo';
itemList.previousElementSibling.style.color = 'blue';

// CREATE ELEMENT
// create new div
var newDiv = document.createElement('div');

// add class
newDiv.className = 'hello';
// add id
newDiv.id = 'hello1';
// add attribute
newDiv.setAttribute('title', 'hello div');
// text node
var newDivText = document.createTextNode('Hello World');
// add text to div
newDiv.appendChild(newDivText);

// insert the div
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);

newDiv.style.fontSize = '30px';

console.log(newDiv);