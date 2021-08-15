const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach(([num1, num2]) => {
  return rectangleArea(num1, num2);
  assert.strictEqual(rectangleArea(), num1 * num2) // altere a chamada da funcao rectangleArea
});
assert.strictEqual(rectangleArea(1, 2), 2);