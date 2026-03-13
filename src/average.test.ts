import { mean, median, mode } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [1, 7];
  const expected: number = 4;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [1, 2, 3, 4, 5];
  const expected: number = 3;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => mean(numbers)).toThrow("Cannot calculate mean of an empty list");
});

test("test median for odd number of elements", () => {
  // Arrange
  const numbers: number[] = [2, 1, 6, 7, 8];
  const expected: number = 6;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for even number of elements", () => {
  // Arrange
  const numbers: number[] = [1, 5, 2, 6, 7, 8];
  const expected: number = 5.5;

  // Act
  const actual: number = median(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test median for no elements", () => {
  // Arrange
  const numbers: number[] = [];

  // Act & Assert
  expect(() => median(numbers)).toThrow("Cannot calculate median of an empty list");
});

test("test mode of single element", () => {
  const numbers: number[] = [1];
  const expected: number[] = [1];
  expect(mode(numbers)).toEqual(expected);
});

test("test mode of repeated single element", () => {
  const numbers: number[] = [1, 1];
  const expected: number[] = [1];
  expect(mode(numbers)).toEqual(expected);
});

test("test mode with one clear winner", () => {
  const numbers: number[] = [1, 1, 2];
  const expected: number[] = [1];
  expect(mode(numbers)).toEqual(expected);
});

test("test mode with two equally frequent elements", () => {
  const numbers: number[] = [1, 1, 2, 2];
  const expected: number[] = [1, 2];
  expect(mode(numbers)).toEqual(expected);
});