function handleClick(event) {
  console.log('button clicked!');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var button = document.querySelector('button.click-button');
button.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event:', event);
  console.log('event.target:', event.target);
}

var mouseOver = document.querySelector('button.hover-button');
mouseOver.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event:', event);
  console.log('event.target', event.target);
}

var DoubleClick = document.querySelector('button.double-click-button');
DoubleClick.addEventListener('dblclick', handleDoubleClick);
