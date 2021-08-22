const { test, expect } = require('@jest/globals');
const { sum, myRemove, myRemoveWithoutCopy, myFizzBuzz,
  obj1, obj2, obj3 } = require('./testesunitarios.js');

test('Testa a função sum', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
  expect(() => sum(4, '5')).toThrow('parameters must be numbers');
});

test('Testa a função myRemove', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

test('Testa a função myRemoveWithoutCopy', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
})

test('Testa a função myFizzBuzz', () => {
  expect(myFizzBuzz(15)).toBe('fizzbuzz');
  expect(myFizzBuzz(9)).toBe('fizz');
  expect(myFizzBuzz(5)).toBe('buzz');
  expect(myFizzBuzz(7)).toBe(7);
})

test('Testa a igualdade entre os objetos', () => {
  expect(obj1.title).toEqual(obj2.title);
  expect(obj1.description).toEqual(obj2.description);
  expect(obj1.title).not.toEqual(obj3.title);
})