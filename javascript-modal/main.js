var modal = document.querySelector('.modal');
var container = document.querySelector('.modal-container');
var buttonNO = document.querySelector('.button-modal');
var buttonOpen = document.querySelector('.button');

function modalAlive() {
  if (modal.className === 'modal') {
    modal.className = 'modal-alive';
  }
  if (modal.className === 'modal-alive') {
    container.className = 'modal-container-alive';
  }
}

buttonOpen.addEventListener('click', modalAlive);

function modalNo() {
  modal.className = 'modal';
  container.className = 'modal-container';
}

buttonNO.addEventListener('click', modalNo);
