const assert = require('assert');

// function sum(a, b) {
//   if (typeof a !== 'number' || typeof b !== 'number') {
//     throw new Error('parameters must be numbers');
//   } 

//   return a + b;
// }

// // implemente seus testes aqui
// assert.strictEqual(sum(5, 4), 9, "O resultado não foi o esperado");
// assert.strictEqual(sum(5, "4"), 9, "O resultado não foi o esperado");
// assert.strictEqual(sum(0, 0), 0, "O resultado não foi o esperado");

// function myRemove(arr, item) {
//   let newArr = [];
//   for (let index = 0; index < arr.length; index += 1) {
//     if (item !== arr[index]) {
//       newArr.push(arr[index]);
//     }
//   }
//   return newArr;
// }

// // implemente seus testes aqui
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "Erro");
// assert.deepStrictEqual(myRemove([22, 10, 6, 7, -10], -10), [22, 10, 6, 7], "Erro");
// assert.deepStrictEqual(myRemove([0, 2, 0, 0], 0), [2], "Erro");
// assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], "Erro");

// function myRemoveWithoutCopy(arr, item) {
//   for (let index = 0, len = arr.length; index < len; index += 1) {
//     if (arr[index] === item) {
//       arr.splice(index, 1);
//       index -= 1;
//       len -= 1;
//     }
//   }

//   return arr;
// }

// // implemente seus testes aqui
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4], "Erro");
// assert.deepStrictEqual(myRemoveWithoutCopy([22, 10, 6, 7, -10], -10), [22, 10, 6, 7], "Erro");
// assert.deepStrictEqual(myRemoveWithoutCopy([0, 2, 0, 0], 0), [2], "Erro");
// assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4], "Erro");


// function myFizzBuzz(num) {
//   if (typeof num !== 'number') return false;
//   if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
//   if (num % 3 === 0) return 'fizz';
//   if (num % 5 === 0) return 'buzz';
//   return num;
// }

// // implemente seus testes aqui
// assert.strictEqual(myFizzBuzz(30), "fizzbuzz", "Retorno errado");
// assert.strictEqual(myFizzBuzz(18), "fizz", "Retorno inesperado");
// assert.strictEqual(myFizzBuzz(20), "buzz", "Retorno inesperado");
// assert.strictEqual(myFizzBuzz(22), 22, "Retorno inesperado");
// assert.strictEqual(myFizzBuzz("a"), false, "Retorno inesperado");const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
// assert.deepStrictEqual(, true, "Retorno inesperao");

// escreva a função addOne aqui
// function addOne (Array) {
//   let newArray = [];
//   for (let index in Array) {
//     newArray.push(Array[index] + 1);
//   }
//   return newArray;
// };

// const myArray = [31, 57, 12, 5];
// const unchanged = [31, 57, 12, 5];
// const expected = [32, 58, 13, 6];
// const output = addOne(myArray);

// assert.strictEqual(typeof addOne, 'function');
// assert.deepStrictEqual(output, expected);
// assert.deepStrictEqual(myArray, unchanged);


// escreva a função wordLengths aqui
// function wordLengths (Array) {
//   let newArray = [];
//   for (let index in Array) {
//     newArray.push(Array[index].length);
//   }
//   return newArray;
// }

// const words = ['sun', 'potato', 'roundabout', 'pizza'];
// const expected = [3, 6, 10, 5];

// assert.strictEqual(typeof wordLengths, 'function');
// const output = wordLengths(words);
// assert.deepStrictEqual(output, expected);


// escreva a função sumAllNumbers aqui
function sumAllNumbers (numbers) {
  return numbers.reduce((total, num) => total + num);
} 

const numbers = [9, 23, 10, 3, 10];
const expected = 55;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);