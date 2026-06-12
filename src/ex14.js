/**
 * Return a new array with all zeroes moved to the end.
 * Keep the other values in their original order.
 * @param {number[]} numbers
 * @returns {number[]}
 */
function moveZeroes(numbers) {
  if (numbers === undefined) {
    throw new Error('Array cannot be undefined');
  }

  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array');
  }

  if (numbers.some((item) => typeof item !== 'number')) {
    throw new Error('Array can only contain numbers');
  }

  const nonZeroes = numbers.filter((number) => number !== 0);
  const zeroes = numbers.filter((number) => number === 0);

  return [...nonZeroes, ...zeroes];
}

module.exports = moveZeroes;