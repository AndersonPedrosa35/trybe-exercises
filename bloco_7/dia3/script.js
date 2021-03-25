const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  } 

  return a + b;
}

// implemente seus testes aqui
assert.strictEqual(sum(5, 4), 9, "O resultado não foi o esperado");
assert.strictEqual(sum(0, 0), 0, "O resultado não foi o esperado");