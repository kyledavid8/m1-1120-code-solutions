var student = {
  firstName: 'Kyle',
  lastName: 'Cunningham',
  age: 19
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'construction';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOcuppation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'Toyota',
  model: '4Runner',
  year: '2021'
};

vehicle['color'] = 'gray';
vehicle['isConvertible'] = false;
console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Daisy',
  type: 'Chihuahua'
};

delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
