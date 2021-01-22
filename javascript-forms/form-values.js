var contactForm = document.querySelector('#contact-form');
var form = document.forms[0];

function submit(event) {
  event.preventDefault();
  var messageData = {
    name: form.elements[0].value,
    email: form.elements[1].value,
    message: form.elements[2].value
  };
  console.log(messageData);
  contactForm.reset();
}

contactForm.addEventListener('submit', submit);
