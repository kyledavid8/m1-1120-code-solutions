/* exported includesSeven */
function includesSeven(array) {
  var i = 0;
  var answer = false;
  while (i < array.length) {
    if (array[i] === 7) {
      answer = true;
      i++;
    } else {
      i++;
    }
  }
  return answer;
}
