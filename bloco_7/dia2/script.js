const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// function manipulation (object, key, value) {
//   object[key] = value;
//   return object;
// } manipulation(lesson1, "periodo", "manhã");

// function keys (object) {
//   return Object.keys(object);
// } console.log(keys(lesson1))

// function objectSize (object) {
//   object.length;}
// const valores = (object) => console.log(Object.values(object));
// valores(lessons);

const alllessons = Object.assign({}, {
  lesson1,
  lesson2,
  lesson3
});
// console.log(alllessons);

// const sumStudent = (object) => {
//   const array = Object.values(object);
//   return array.reduce((acumulador, elemento) => {
//     return acumulador + elemento.numeroEstudantes;
//   }, 0);
// }; sumStudent(alllessons)

const getValueByNumber = (array, position) => {
  let result = Object.values(array);
  return result[position];
};
getValueByNumber(lesson1, 0);

const verifyPair = (object, key, value) => {
  const array = Object.entries(object);
  return array.some(([chave, valor]) => chave === key && valor === value);
};
console.log(verifyPair(lesson1, "materia", "Matemática"));