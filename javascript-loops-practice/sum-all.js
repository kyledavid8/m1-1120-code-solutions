/* exported sumAll */
function sumAll(numbers) {
  var i = 0;
  var answer = 0;
  while (i < numbers.length) {
    answer += numbers[i];
    i++;
  }
  return answer;
}
