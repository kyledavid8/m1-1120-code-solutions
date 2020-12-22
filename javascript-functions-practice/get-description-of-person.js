/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  return person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
}

var tim = {
  name: 'Tim Berners-Lee',
  occupation: 'computer scientist',
  birthPlace: 'London, England'
};

getDescriptionOfPerson(tim);
