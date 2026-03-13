import { add, subtract, multiply, divide } from "./calculator";

test("add three to two is five", () => {
  // Arrange
  const a: number = 6;
  const b: number = 7;
  const expected: number = 13;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("multiply six by seven is forty-two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 7;
  const expected: number = 42;

  // Act
  const actual: number = multiply(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide forty-two by seven is six", () => {
  // Arrange
  const a: number = 42;
  const b: number = 7;
  const expected: number = 6;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("divide by zero throws an error", () => {
  // Arrange
  const a: number = 42;
  const b: number = 0;

  // Act & Assert
  expect(() => divide(a, b)).toThrow("Division by zero is not allowed");
});