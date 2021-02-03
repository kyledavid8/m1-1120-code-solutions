/* exported calculator */
var calculator = {
  add: function (x, y) {
    return (x + y);
  },
  subtract: function (x, y) {
    return (x - y);
  },
  multiply: function (x, y) {
    return (x * y);
  },
  divide: function (x, y) {
    return (x / y);
  },
  square: function (x) {
    return x ** 2;
  },
  sumAll: function (numbers) {
    var counter = 0;
    var ans = 0;
    while (counter < numbers.length) {
      ans += numbers[counter];
      counter++;
    }
    return ans;
  },
  getAverage: function (numbers) {
    var counter = 0;
    var ans = 0;
    while (counter < numbers.length) {
      ans += numbers[counter];
      counter++;
    }
    return (ans / numbers.length);
  }
};
