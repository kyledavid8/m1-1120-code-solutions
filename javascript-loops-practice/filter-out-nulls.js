/* exported filterOutNulls */
function filterOutNulls(values) {
  var i = 0;
  var answer = [];
  while (i < values.length) {
    if (values[i] !== null) {
      answer.push(values[i]);
      i++;
    } else {
      i++;
    }
  }
  return answer;
}
