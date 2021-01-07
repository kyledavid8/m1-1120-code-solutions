/* exported initial */
function initial(array) {
  var i = 0;
  var answer = [];
  while (i < array.length) {
    if (i === (array.length - 1)) {
      i++;
    } else {
      answer.push(array[i]);
      i++;
    }
  }
  return answer;
}
