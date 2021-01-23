/* exported truncate */
function truncate(length, string) {
  var answer = string.substring(0, length);
  if (length >= string.length) {
    var answer2 = string + '...';
  } else {
    answer2 = answer + '...';
  }
  return answer2;
}
