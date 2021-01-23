/* exported numVowels */
function numVowels(string) {
  var newString = string.toLowerCase();
  var counter = 0;
  var number = 0;
  while (counter <= string.length - 1) {
    if (newString[counter] === 'a' || newString[counter] === 'e' || newString[counter] === 'i' || newString[counter] === 'o' || newString[counter] === 'u') {
      number++;
      counter++;
    } else {
      counter++;
    }
  }
  return number;
}
