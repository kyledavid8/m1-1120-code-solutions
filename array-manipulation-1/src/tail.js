/* exported tail */
function tail(array) {
  var answer = [];
  var i = 0;
  while (i < array.length) {
    if (i > 0) {
      answer.push(array[i]);
      i++;
    } else {
      i++;
    }
  }
  return answer;
}
