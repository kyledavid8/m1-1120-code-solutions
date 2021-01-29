/* exported pick */
function pick(source, keys) {
  var ans = {};
  for (var prop in source) {
    if (typeof source[prop] !== 'undefined' && keys.includes(prop)) {
      ans[prop] = source[prop];
    }
  }
  return ans;
}
