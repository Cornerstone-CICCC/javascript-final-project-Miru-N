/**
 * Capitalize the first letter of each word in a string.
 * @param {string} str
 * @returns {string}
 */
function capitalizeWords(str) {
  if (str === undefined) {
    throw new Error('String cannot be undefined');
  }

  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }

  if (str.trim() === '') {
    return '';
  }

  return str
    .trim()
    .split(/\s+/)
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

module.exports = capitalizeWords;