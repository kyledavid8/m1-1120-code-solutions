/* exported isVowel */
function isVowel(char) {
  var answer = false;
  var par = char.toLowerCase();
  if (par === 'a' || par === 'e' || par === 'i' || par === 'o' || par === 'u') {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
