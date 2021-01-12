/* exported getWords */
function getWords(string) {
  var answer = [];
  if (string === '') {
    answer = [];
  } else {
    answer = string.split(' ');
  }
  return answer;
}
