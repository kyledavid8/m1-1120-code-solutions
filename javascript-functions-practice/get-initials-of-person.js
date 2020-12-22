/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  return person.firstName.charAt(0) + person.lastName.charAt(0);
}

var lea = {
  firstName: 'Lea',
  lastName: 'Verou'
};

getInitialsOfPerson(lea);
