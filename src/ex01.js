/**
 * Find the maximum number in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
  if (arr === undefined) {
    throw new Error('Array cannot be undefined');
  }

  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }

  if (arr.length === 0) {
    throw new Error('Array cannot be empty');
  }

  if (arr.some((item) => typeof item !== 'number')) {
    throw new Error('Array can only contain numbers');
  }

  return Math.max(...arr);
}

module.exports = findMax;