function click(event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    console.log('closest .task-list-item:', listItem);
    listItem.remove();
  }
}
var list = document.querySelector('.task-list');
var listItem = event.target.closest('.task-list-item');
list.addEventListener('click', click);
