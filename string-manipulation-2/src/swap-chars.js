/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var split = string.split('');
  split.splice(firstIndex, 1, string[secondIndex]);
  split.splice(secondIndex, 1, string[firstIndex]);
  var answer = split.join('');
  return answer;
}
