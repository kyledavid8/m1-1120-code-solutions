var books = [
  {
    isbn: '9780060888695',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee'
  },
  {
    isbn: '9780060098919',
    title: 'The Great Gatsby',
    author: 'F Scott Fitzgerald'
  },
  {
    isbn: '9781501259050',
    title: 'The Color Purple',
    author: 'Alice Walker'
  }
];
console.log('typeof books:', typeof books);

console.log('JSON string of books:', typeof JSON.stringify(books));

var student = '{"Number id": "2876", "string name":"Johnny"}';

console.log('type JSON string:', typeof student);

console.log('parse string to object:', typeof JSON.parse(student));
