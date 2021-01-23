/* exported capitalizeWords */
function capitalizeWords(string) {
  var array = string.toLowerCase().split(' ');
  var counter = 0;
  var newArray = [];
  while (array.length - 1 >= counter) {
    var capital = array[counter].charAt(0).toUpperCase();
    var leftOver = array[counter].slice(1);
    var combine = capital + leftOver;
    newArray.push(combine);
    counter++;
  }
  var answer = newArray.join(' ');
  return answer;
}
