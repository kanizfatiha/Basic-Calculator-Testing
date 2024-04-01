// Importing the functions directly from the file
const { add, subtract, multiply, divide } = require("../../src/basic");

describe('Calculator Operations', () => {
  // Test data for addition
  var addData = [
    [1, 2, 3],     // 1 + 2 = 3
    [4, 5, 9],     // 4 + 5 = 9
    [3, 12, 15],   // 3 + 12 = 15
    [4, -2, 2]     // 4 + (-2) = 2
  ];

  // Test data for subtraction
  var subtractData = [
    [1, 2, -1],    // 1 - 2 = -1
    [4, 5, -1],    // 4 - 5 = -1
    [3, 12, -9],   // 3 - 12 = -9
    [4, -2, 6]     // 4 - (-2) = 6
  ];

  // Test data for multiplication
  var multiplyData = [
    [1, 2, 2],     // 1 * 2 = 2
    [4, 5, 20],    // 4 * 5 = 20
    [3, 12, 36],   // 3 * 12 = 36
    [4, -2, -8]    // 4 * (-2) = -8
  ];

  // Test data for division
  var divideData = [
    [4, 2, 2],     // 4 / 2 = 2
    [9, 3, 3],     // 9 / 3 = 3
    [12, 4, 3],    // 12 / 4 = 3
    [16, -2, -8]   // 16 / (-2) = -8
  ];

  describe.each(addData)('Addition', (a, b, expected) => {
    test(`add(${a}, ${b})`, () => {
      expect(add(a, b)).toBe(expected);
    });
  });

  describe.each(subtractData)('Subtraction', (a, b, expected) => {
    test(`subtract(${a}, ${b})`, () => {
      expect(subtract(a, b)).toBe(expected);
    });
  });

  describe.each(multiplyData)('Multiplication', (a, b, expected) => {
    test(`multiply(${a}, ${b})`, () => {
      expect(multiply(a, b)).toBe(expected);
    });
  });

  describe.each(divideData)('Division', (a, b, expected) => {
    test(`divide(${a}, ${b})`, () => {
      if (b === 0) {
        expect(() => divide(a, b)).toThrow();
      } else {
        expect(divide(a, b)).toBe(expected);
      }
    });
  });
});
