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

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], "Erro");
assert.deepStrictEqual(myRemove([22, 10, 6, 7, -10], -10), [22, 10, 6, 7], "Erro");
assert.deepStrictEqual(myRemove([0, 2, 0, 0], 0), [2], "Erro");
