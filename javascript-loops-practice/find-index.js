/* exported findIndex */
function findIndex(array, value) {
  var i = 0;
  var answer = -1;
  while (i < array.length) {
    if (array[i] === value) {
      answer = i;
      break;
    } else {
      i++;
    }
  }
  return answer;
}
