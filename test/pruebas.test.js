const suma = require('../src/funcion');

test('suma 1 + 2 debe ser 3', () => {
  expect(suma(1, 2)).toBe(3);
});
