/* exported omit */
function omit(source, keys) {
  var ans = {};
  var trash = {};
  for (var prop in source) {
    if (keys.includes(prop)) {
      trash[prop] = source[prop];
    } else {
      ans[prop] = source[prop];
    }
  }
  return ans;
}
