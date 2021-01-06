/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var i = 0;
  var answer = [];
  while (i < words.length) {
    answer.push(words[i] + suffix);
    i++;
  }
  return answer;
}
