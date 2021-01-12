/* exported reverseWord */
function reverseWord(word) {
  var counter = word.length - 1;
  var answer = '';
  while (counter >= 0) {
    answer += word[counter];
    counter--;
  }
  return answer;
}
