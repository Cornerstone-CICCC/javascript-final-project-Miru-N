/**
 * Add all numbers in an array.
 * @param {number[]} arr
 * @returns {number}
 */
function sumArray(arr) {
  if (arr === undefined) {
    throw new Error('Array cannot be undefined');
  }

  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }

  if (arr.some(item => typeof item !== 'number')) {
    throw new Error('Array can only contain numbers');
  }

  return arr.reduce((total, number) => total + number, 0);
}

module.exports = sumArray;