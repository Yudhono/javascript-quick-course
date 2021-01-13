//EVENTS

// alternatif 1
var button = document.getElementById('button').addEventListener('click', buttonClick);
// alternatif 2
var button = document.getElementById('button').addEventListener('click', function(){
    console.log('hallo af');
});

function buttonClick(e) {
    console.log('button diklik')
    document.getElementById('header-title').textContent = 'changed';
    document.querySelector('#main').style.backgroundColor = '#f4f4f4';
    console.log(e);

    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList);

    var output = document.getElementById('output');
    output.innerHTML = '<h3>' + e.target.id + '</h3>';

    console.log(e.type); // type of input

    console.log(e.clientX); // mouse cursor position in X axis from browser
    console.log(e.clientY); // mouse cursor position in Y axis from browser

    console.log(e.offsetX); // mouse cursor position in X axis from the element
    console.log(e.offsetX); // mouse cursor position in y axis from the element

    console.log(e.altKey); // to know the alt key is pressed or not when clicking the element
    console.log(e.ctrlKey); // to know the alt ctrl is pressed or not when clicking the element
    console.log(e.shiftKey); // to know the alt shift is pressed or not when clicking the element
}

var button = document.getElementById('button');
var box = document.getElementById('box');

// MOUSE EVENT LISTENER
button.addEventListener('click', runEvent);
button.addEventListener('dblclick', runEvent); // double click event
button.addEventListener('mousedown', runEvent); // mouse down event
button.addEventListener('mouseup', runEvent); // mouse up event

box.addEventListener('mouseenter', runEvent); // fired up when entering element
box.addEventListener('mouseleave', runEvent);

box.addEventListener('mouseover', runEvent); // fired up when over the inner element
box.addEventListener('mouseout', runEvent);

box.addEventListener('mousemove', runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');

//KEY EVENT LISTENER
itemInput.addEventListener('keydown', runEvent);
itemInput.addEventListener('keyup', runEvent);
itemInput.addEventListener('keypress', runEvent);

itemInput.addEventListener('focus', runEvent);
itemInput.addEventListener('blur', runEvent);

itemInput.addEventListener('cut', runEvent);
itemInput.addEventListener('paste', runEvent);

itemInput.addEventListener('input', runEvent);

var select = document.querySelector('select');
select.addEventListener('change', runEvent);
select.addEventListener('input', runEvent);

form.addEventListener('submit', runEvent);


function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE: '+e.type);

    console.log(e.target.value);
    document.getElementById('output').innerHTML = '<H3>'+e.target.value+'</H3>';
    output.innerHTML = '<h3>MouseX: '+e.offsetX+'</H3><H3>MouseY: '+e.offsetY+'</H3>'

    box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)";
}