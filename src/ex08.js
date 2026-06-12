/**
 * Return the strings that contain the keyword.
 * The search should be case-insensitive.
 * @param {string[]} arr
 * @param {string} keyword
 * @returns {string[]}
 */
function search(arr, keyword) {
  if (arr === undefined) {
    throw new Error('Array cannot be undefined');
  }

  if (!Array.isArray(arr)) {
    throw new Error('Argument must be an array');
  }

  if (arr.some((item) => typeof item !== 'string')) {
    throw new Error('Array can only contain strings');
  }

  if (keyword === undefined) {
    throw new Error('Keyword cannot be undefined');
  }

  if (typeof keyword !== 'string') {
    throw new Error('Keyword must be a string');
  }

  return arr.filter((item) =>
    item.toLowerCase().includes(keyword.toLowerCase())
  );
}

module.exports = search;