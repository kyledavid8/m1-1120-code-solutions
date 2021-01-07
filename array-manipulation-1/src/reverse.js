/* exported reverse */
function reverse(array) {
  var i = 0;
  var answer = [];
  while (i < array.length) {
    answer.unshift(array[i]);
    i++;
  }
  return answer;
}
