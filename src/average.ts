export function mean(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mean of an empty list");
  }
  let sum: number = 0;
  for (let number of numbers) {
    sum += number;
  }
  const mean: number = sum / numbers.length;
  return mean;
}

export function median(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate median of an empty list");
  }

  const sorted: number[] = numbers.slice().sort((a, b) => a - b);
  const middle: number = Math.floor(sorted.length / 2);

  if (sorted.length % 2 !== 0) {
    return sorted[middle];
  } else {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
}

export function mode(numbers: number[]): number[] {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate mode of an empty list");
  }

  const counts: Map<number, number> = new Map();
  for (const number of numbers) {
    const current: number = counts.get(number) || 0;
    counts.set(number, current + 1);
  }

  let maxCount: number = 0;
  for (const count of counts.values()) {
    if (count > maxCount) {
      maxCount = count;
    }
  }

  const result: number[] = [];
  for (const [number, count] of counts.entries()) {
    if (count === maxCount) {
      result.push(number);
    }
  }

  return result.sort((a, b) => a - b);
}