/* exported compact */
function compact(array) {
  var i = 0;
  var answer = [];
  while (i < array.length) {
    if (array[i]) {
      answer.push(array[i]);
      i++;
    } else {
      i++;
    }
  }
  return answer;
}
/* I'm am currently making a comment */
