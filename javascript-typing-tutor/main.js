var $span = document.querySelectorAll('span');
var counter = 0;
function keydown(e) {
  if (e.key === $span[counter].textContent) {
    $span[counter].className = 'green border-green';
    counter++;
    $span[counter].className = 'border-pending';
  } else {
    $span[counter].className = 'red border-red';
  }
}

document.addEventListener('keydown', keydown);
