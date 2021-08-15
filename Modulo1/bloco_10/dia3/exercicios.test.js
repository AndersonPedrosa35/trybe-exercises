
const { jest, it } = require('@jest/globals');
const exercicios = require('./exercicios');

describe('Função randomValue', () => {
  it('Testando números aleatórios', () => {
    exercicios.randomValue = jest.fn().mockReturnValue(10);
  
    expect(exercicios.randomValue()).toBe(10);
    expect(exercicios.randomValue).toHaveBeenCalled();
    expect(exercicios.randomValue).toBeCalledTimes(1);
  });
});

describe('Função de calculos', () => {
  it('Testando divisão', () => {
    exercicios.randomValue = jest.fn().mockImplementation((a, b) => a / b);

    expect(exercicios.randomValue(2, 2)).toBe(1);
  });

  it('Testando multiplicação', () => {
    exercicios.randomValue = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(exercicios.randomValue(2, 2, 2)).toBe(8);
    expect(exercicios.randomValue).toBeCalledTimes(1);

    exercicios.randomValue.mockReset();
    exercicios.randomValue = jest.fn().mockImplementation((a) => a * 2);

    expect(exercicios.randomValue(2)).toBe(4);
    expect(exercicios.randomValue).toBeCalledTimes(1);
  });
});

describe('Testando funções com string', () => {
  it('')

});