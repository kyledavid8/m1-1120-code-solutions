function handleFocus(event) {
  console.log('The "focus" event has fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('the "blur" event has fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of', event.target.name, ':', event.target.value);
}

var inputName = document.querySelector('#user-name');
var inputEmail = document.querySelector('#user-email');
var textArea = document.querySelector('#user-message');

inputName.addEventListener('focus', handleFocus);
inputName.addEventListener('blur', handleBlur);
inputName.addEventListener('input', handleInput);
inputEmail.addEventListener('focus', handleFocus);
inputEmail.addEventListener('blur', handleBlur);
inputEmail.addEventListener('input', handleInput);
textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);
