// get button class from html
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.className);
});

btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';

    document.querySelector('body').classList.add('bg-dark');
    
});