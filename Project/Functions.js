const username = document.querySelector('#username');
const password = document.querySelector('#password');
const submit = document.querySelector('#submit');

submit.addEventListener('click', (event)=>
{
    event.preventDefault();
    if (username.value.trim() == '')
    {
        error(username, 'username cannot be empty');
    }
});

function error(element, msg)
{
    element.style.border = '3px red solid';
    const parent = element.parentElement;
    const p = parent.querySelector('p');
    p.textContent = msg;
    p.style.visibility = 'visible';
}