//object defination
const person = {
  firstName: 'Anuj',
  lastName: 'Karki',
  age: 22,
  gender: 'Male',
};

//loging whole object
console.log(person);

//loging object properties
console.log(person.firstName + ' ' + person['lastName']);

const person1 = {
  firstName: 'Anuj',
  lastName: 'Karki',
  age: 22,
  gender: 'Male',
};

const person2 = {
  firstName: 'Anuj',
  lastName: 'Karki',
  age: 22,
  gender: 'Male',
};

//object that contains object 
const people={person,person1,person2};

//logging whole Object
console.log(people);

//loging a Object with in object
console.log(people.person1);