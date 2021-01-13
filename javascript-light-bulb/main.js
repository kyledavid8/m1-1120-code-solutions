var bulb = document.querySelector('.bulb');
var container = document.querySelector('.container');

function switched() {
  if (bulb.className === 'bulbActive') {
    bulb.className = 'bulb';
  } else {
    bulb.className = 'bulbActive';
  }
  if (container.className === 'containerActive') {
    container.className = 'container';
  } else {
    container.className = 'containerActive';
  }
}

bulb.addEventListener('click', switched);
