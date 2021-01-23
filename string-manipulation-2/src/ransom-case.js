/* exported ransomCase */
function ransomCase(string) {
  var zero = string[0].toLowerCase();
  var one = string[1].toUpperCase();
  var counter = 2;
  var answer = zero + one;
  while (string.length - 1 >= counter) {
    if (counter % 2 === 1) {
      answer += string[counter].toUpperCase();
    } else {
      answer += string[counter].toLowerCase();
    }
    counter++;
  }
  return answer;
}
