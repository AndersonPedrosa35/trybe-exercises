const { expect, test } = require('@jest/globals');
const service = require('./service');

test("Testando somar", () => {
  service.somar = jest.spyOn(service, 'somar');

  service.somar(1, 2).then((result) => {
    expect(result).toBe(3);
  })
});

test('Testando subtrair', () => {
  service.subtrair = jest.spyOn(service, 'subtrair');

  expect(service.subtrair(2, 1)).toBe(1);
})

test('Testando multiplicar', () => {
  service.multiplicar = jest.fn().mockReturnValue(10);

  expect(service.multiplicar()).toBe(10);
})

test('Testando Dividir', () => {
  service.dividir = jest.fn().mockReturnValue(15)
    .mockReturnValueOnce(5).mockReturnValueOnce(2);

  expect(service.dividir()).toBe(5);
  expect(service.dividir()).toBe(2);
  expect(service.dividir()).toBe(15);
});

