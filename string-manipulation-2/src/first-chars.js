/* exported firstChars */
function firstChars(length, string) {
  if (length >= string.length) {
    var answer = string;
  } else {
    answer = string.substring(0, length);
  }
  return answer;
}
