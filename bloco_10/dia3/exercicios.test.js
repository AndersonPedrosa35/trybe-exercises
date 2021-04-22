const { expect } = require('@jest/globals');
const exercicios = require('./exercicios');

test('Testando números aleatórios', () => {
  exercicios.randomValue = jest.fn().mockReturnValue(10);

  expect(exercicios.randomValue()).toBe(10);
  expect(exercicios.randomValue).toHaveBeenCalled();
  expect(exercicios.randomValue).toBeCalledTimes(1);
})