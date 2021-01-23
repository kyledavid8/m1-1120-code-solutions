/* exported lastChars */
function lastChars(length, string) {
  var answer = [];
  if (length >= string.length) {
    var realAnswer = string;
  } else {
    var counter = length;
    var theLength = string.length - 1;
    while (counter > 0) {
      answer.unshift(string.slice(theLength, (theLength + 1)));
      theLength--;
      counter--;
    }
    realAnswer = answer.join('');
  }
  return realAnswer;
}
