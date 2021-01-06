/* exported filterOutStrings */
function filterOutStrings(values) {
  var i = 0;
  var answer = [];
  while (i < values.length) {
    if (typeof values[i] !== 'string') {
      answer.push(values[i]);
      i++;
    } else {
      i++;
    }
  }
  return answer;
}
