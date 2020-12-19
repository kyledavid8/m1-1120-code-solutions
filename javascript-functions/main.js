function convertMinutesToSeconds(minutes) {
  var convertMinToSec = minutes * 60;
  return convertMinToSec;
}

var answer = convertMinutesToSeconds(5);
console.log('The number of seconds in 5 minutes is:', answer);

function greet(name) {
  var greeting = '"Hey, ' + name + '"';
  return greeting;
}

var greetAnswer = greet('Beavis');
console.log('The result of the greet function is:', greetAnswer);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaAnswer = getArea(17, 42);
console.log('The area of a square with a width of 17 and height of 42 is:', areaAnswer);

function getFirstName(person) {
  var firstName = '"' + person.firstName + '"';
  return firstName;
}

var firstNameAnswer = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('The firstName of "person" is:', firstNameAnswer);

function getLastElement(array) {
  var lastElementNumber = array.length - 1;
  var lastElement = '"' + array[lastElementNumber] + '"';
  return lastElement;
}

var lastElementAnswer = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('The last element of array is:', lastElementAnswer);
