var container = document.querySelector('.tab-container');
var tabList = document.querySelectorAll('.tab');
var viewList = document.querySelectorAll('.view');

container.addEventListener('click', tab);

function tab(event) {
  var counter = 0;
  if (event.target.matches('.tab')) {
    while (counter <= tabList.length - 1) {
      if (tabList[counter] !== event.target) {
        tabList[counter].className = 'tab';
        counter++;
      } else {
        var data = event.target.getAttribute('data-view');
        var ans = tabList[counter].className = 'tab active';
        var counter2 = 0;
        while (counter2 <= viewList.length - 1) {
          if (data !== viewList[counter2].getAttribute('data-view')) {
            viewList[counter2].className = 'hidden';
            counter2++;
          } else {
            viewList[counter2].className = 'view';
            counter2++;
          }
        }
        counter++;
      }
    }
  }
  return ans;
}
