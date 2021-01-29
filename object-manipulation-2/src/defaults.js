/* exported defaults */
function defaults(target, source) {
  var tar = Object.keys(target);
  var so = Object.keys(source);
  var counter = 0;
  for (var prop in source) {
    if (target[prop] !== 'undefined' && tar[counter] !== so[counter]) {
      target[prop] = source[prop];
      counter++;
    } else {
      counter++;
    }
  }
}
