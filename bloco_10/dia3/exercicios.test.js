const { expect, test } = require('@jest/globals');
const { fn } = require('jest-mock');
const exercicios = require('./exercicios');

test('Testando números aleatórios', () => {
  exercicios.randomValue = jest.fn().mockReturnValue(10);

  expect(exercicios.randomValue()).toBe(10);
  expect(exercicios.randomValue).toHaveBeenCalled();
  expect(exercicios.randomValue).toBeCalledTimes(1);
})

test('Testando divisão', () => {
  exercicios.randomValue = jest.fn().mockImplementation((a, b) => a / b);

  expect(exercicios.randomValue(2, 2)).toBe(1);
})

test('Testando multiplicação', () => {
  exercicios.randomValue = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(exercicios.randomValue(2, 2, 2)).toBe(8);
  expect(exercicios.randomValue).toBeCalledTimes(1);

  exercicios.randomValue.mockReset();
  exercicios.randomValue = jest.fn().mockImplementation((a) => a * 2);

  expect(exercicios.randomValue(2)).toBe(4);
  expect(exercicios.randomValue).toBeCalledTimes(1);
})