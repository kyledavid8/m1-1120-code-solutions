/* exported invert */
function invert(source) {
  var ans = {};
  for (var prop in source) {
    var value = prop;
    var property = source[prop];
    ans[property] = value;
  }
  return ans;
}
