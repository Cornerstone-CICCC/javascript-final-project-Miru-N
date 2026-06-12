/**
 * Rotate the values in an array to the right.
 * Negative positions rotate the array to the left.
 * @param {Array} arr
 * @param {number} positions
 * @returns {Array}
 */
function rotateArray(arr, positions) {
  if (arr === undefined) {
    throw new Error('Array cannot be undefined');
  }

  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }

  if (positions === undefined) {
    throw new Error('Positions cannot be undefined');
  }

  if (typeof positions !== 'number') {
    throw new Error('Positions must be a number');
  }

  if (!Number.isInteger(positions)) {
    throw new Error('Positions must be an integer');
  }

  if (arr.length === 0) {
    return [];
  }

  const amount = ((positions % arr.length) + arr.length) % arr.length;
  const splitIndex = arr.length - amount;

  return [...arr.slice(splitIndex), ...arr.slice(0, splitIndex)];
}

module.exports = rotateArray;