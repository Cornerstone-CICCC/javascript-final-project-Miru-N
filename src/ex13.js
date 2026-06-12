/**
 * Determine whether two strings are anagrams of each other.
 * @param {string} firstString
 * @param {string} secondString
 * @returns {boolean}
 */
function checkAnagram(firstString, secondString) {
  if (firstString === undefined) {
    throw new Error('First string cannot be undefined');
  }

  if (secondString === undefined) {
    throw new Error('Second string cannot be undefined');
  }

  if (typeof firstString !== 'string' || typeof secondString !== 'string') {
    throw new Error('Arguments must be strings');
  }

  const sortedFirst = firstString.split('').sort().join('');
  const sortedSecond = secondString.split('').sort().join('');

  return sortedFirst === sortedSecond;
}

module.exports = checkAnagram;