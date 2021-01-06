/* exported countdown */
function countdown(number) {
  var answer = [];
  while (number > -1) {
    answer.push(number);
    number -= 1;
  }
  return answer;
}
