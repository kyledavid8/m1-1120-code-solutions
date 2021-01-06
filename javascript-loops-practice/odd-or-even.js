/* exported oddOrEven */
function oddOrEven(numbers) {
  var i = 0;
  var answer = [];
  while (i < numbers.length) {
    var equation = (numbers[i] % 2);
    if (equation === 0) {
      answer.push('even');
      i++;
    } else {
      answer.push('odd');
      i++;
    }
  }
  return answer;
}
