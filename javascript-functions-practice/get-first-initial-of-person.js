/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  return person.firstName.charAt(0);
}

var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};

getFirstInitialOfPerson(lea);
