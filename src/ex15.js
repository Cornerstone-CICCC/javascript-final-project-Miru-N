/**
 * Find the longest common prefix in an array of strings.
 * @param {string[]} strings
 * @returns {string}
 */
function findLongestCommonPrefix(strings) {
  if (strings === undefined) {
    throw new Error('Array cannot be undefined');
  }

  if (!Array.isArray(strings)) {
    throw new Error('Argument must be an array');
  }

  if (strings.some((item) => typeof item !== 'string')) {
    throw new Error('Array can only contain strings');
  }

  if (strings.length === 0) {
    return '';
  }

  let prefix = strings[0];

  for (const word of strings) {
    while (!word.startsWith(prefix)) {
      prefix = prefix.slice(0, -1);

      if (prefix === '') {
        return '';
      }
    }
  }

  return prefix;
}

module.exports = module.exports = findLongestCommonPrefix;