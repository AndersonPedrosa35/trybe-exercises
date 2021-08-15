// const person = {
//   name: 'João',
//   lastName: 'Jr',
//   age: 34,
// };

// const { nationality = 'João'} = person;
// console.log(nationality);

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
    firstName: 'João',
    lastName: 'Jr II',
};

const otherPerson = {
    firstName: 'Ivan',
    lastName: 'Ivanovich',
    nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

console.log(getPosition(-19.8157, -43.9542));

const multiply = (number, value = 1) => {
  return number * value;
};

console.log(multiply(8));