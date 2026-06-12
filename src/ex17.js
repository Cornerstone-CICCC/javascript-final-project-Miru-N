/**
 * Find the indices of two numbers that add up to the target.
 * Return an empty array when no pair exists.
 * @param {number[]} numbers
 * @param {number} target
 * @returns {number[]}
 */
function findTwoSum(numbers, target) {
  if (numbers === undefined) {
    throw new Error('Array cannot be undefined');
  }

  if (!Array.isArray(numbers)) {
    throw new Error('Argument must be an array');
  }

  if (numbers.some((item) => typeof item !== 'number')) {
    throw new Error('Array can only contain numbers');
  }

  for (let firstIndex = 0; firstIndex < numbers.length; firstIndex += 1) {
    for (
      let secondIndex = firstIndex + 1;
      secondIndex < numbers.length;
      secondIndex += 1
    ) {
      if (numbers[firstIndex] + numbers[secondIndex] === target) {
        return [firstIndex, secondIndex];
      }
    }
  }

  return [];
}

module.exports = findTwoSum;