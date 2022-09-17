const username = document.querySelector('#username');
const form = document.getElementById('form');
const submission = document.getElementById('submit');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const regexEmail = /^[\w!.%+\-]+@[\w\-]+(?:\.[\w\-]+)+$/;
// Regex anterior : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



function showError (target, message)
{
    target.classList.add('error');
    target.classList.remove('valid');
    target.nextElementSibling.style.display = 'initial';
    target.nextElementSibling.textContent = message;
    return;
}
function showValid (target)
{
    target.classList.remove('error');
    target.classList.add('valid');
    target.nextElementSibling.style.display = 'none';
    return;
}

function validateEmail(email)
{
    if(regexEmail.test(email.value))
    {
        showValid(email);
        return;
    }
    showError(email, 'Email is invalid');
   
}
function checkLength(target, min, max)
{
    if(target.value.length < min || target.value.length > max)
    {
        showError(target, `The ${target.id} must be between ${min} and ${max} characters`)
        return;
    }
    showValid(target);
}
function checkRequired(array)
{
    array.forEach((inputField) =>
    {
        if(!inputField.value || inputField.value == '')
        {
            showError(inputField, 'This field is Required');
        }
    })
}
function passwordMatch(pass1, pass2)
{
    if(pass1.value === "" || pass2.value !== pass1.value)
    {
        showError(pass2, "The password don't match");
        return;
    }
    showValid(password);
    showValid(password2);
    return;
}



form.addEventListener('submit', event =>
{
    event.preventDefault();
    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    validateEmail(email);
    passwordMatch(password, password2);

} );