/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word[0] === 'j' || word[0] === 'J') {
    var s = word[4].toUpperCase();
    var j = word[0].toUpperCase();
    var firstHalf = word.slice(1, 4).toLowerCase();
    var secondHalf = word.slice(5).toLowerCase();
    var ans = (j + firstHalf) + (s + secondHalf);
  } else {
    var answer = word.slice(1, word.length).toLowerCase();
    var zero = word.slice(0, 1).toUpperCase();
    ans = zero + answer;
  }
  return ans;
}
