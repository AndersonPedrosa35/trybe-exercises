// const cadastro = {
//   id1: { 
//     name: 'Anderson',
//     idade: 20,
//     endereco: 'rua forte',
//   },
//   id2: {
//     name: 'Andre',
//     idade: 25,
//     endereco: 'rua rio',
//   },
//   id3: {
//     name: 'Ricardo',
//     idade: 28,
//     endereco: 'rua branco',
//   }
// }
// const cadastroArr = ['Anderson', 'Pedrosa', 'Array', 'Fernando']
// console.log(cadastroArr);
// const cliente = cadastroArr.filter((element) => element == 'Anderson');
// console.log(cliente);

// const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
// const prices = [2.99, 3.99, 1.5, 2];

// const menu = (products, prices) => products.map((element, index) => {
//   return { [element] : prices[index]};
// })

// console.log(menu(products, prices));

const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// const expectedResult = [
//   'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
//   'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
//   'Fundação - Ficção Científica - Isaac Asimov',
//   'Duna - Ficção Científica - Frank Herbert',
//   'A Coisa - Terror - Stephen King',
//   'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
// ];

// function formatedBookNames(array) {
//   const book = books.map((element) => {
//     return `${element.name} - ${element.genre} - ${element.author.name}`;
//   })
//   return book;
// }

// assert.deepStrictEqual(formatedBookNames(), expectedResult);

// const expectedResult = [
//   {
//     age: 31,
//     author: 'Isaac Asimov',
//   },
//   {
//     age: 38,
//     author: 'H. P. Lovecraft',
//   },
//   {
//     age: 39,
//     author: 'Stephen King',
//   },
//   {
//     age: 43,
//     author: 'George R. R. Martin',
//   },
//   {
//     age: 45,
//     author: 'Frank Herbert',
//   },
//   {
//     age: 62,
//     author: 'J. R. R. Tolkien',
//   },
// ];

// function nameAndAge() {
//   const book = books.map((element) => {
//     let age =  element.releaseYear - element.author.birthYear;
//     return {author : element.author.name, age : age};
//   })
//   return Object.values(book).sort((a, b) => a.age - b.age);
// }
// assert.deepStrictEqual(nameAndAge(), expectedResult);

// const expectedResult = [
//  {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
// ];

// function fantasyOrScienceFiction() {
//   const book = books.filter((element) => element.genre == 'Fantasia' || element.genre == 'Ficção Científica');
//   return book;
// }

// assert.deepStrictEqual(fantasyOrScienceFiction(), expectedResult);

// const expectedResult = [
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: { name: 'H. P. Lovecraft', birthYear: 1890 },
//     releaseYear: 1928,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: { name: 'Isaac Asimov', birthYear: 1920 },
//     releaseYear: 1951,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
//     releaseYear: 1954,
//   },
// ];

// function oldBooks() {
//   const book = books.filter((element) => 2021 - element.releaseYear > 60);
//   return book.sort((num1, num2) => num1.releaseYear - num2.releaseYear);
// }

// assert.deepStrictEqual(oldBooks(), expectedResult);

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  const book = books.filter((element) => element.genre == 'Fantasia' || element.genre == 'Ficção Científica');
  return book.sort((element) => element.author.name);
}
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), expectedResult);