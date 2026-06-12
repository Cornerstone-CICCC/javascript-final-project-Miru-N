/**
 * Return basic information about a string.
 * Words are separated by spaces. Sentences end with ., !, or ?.
 * @param {string} str
 * @returns {{characters: number, words: number, sentences: number}}
 */
function analyzeText(str) {
  if (str === undefined) {
    throw new Error('String cannot be undefined');
  }

  if (typeof str !== 'string') {
    throw new Error('Argument must be a string');
  }

  const characters = str.length;

  const trimmed = str.trim();

  const words =
    trimmed === ''
      ? 0
      : trimmed.split(/\s+/).length;

  let sentences = 0;

  if (trimmed !== '') {
    const matches = trimmed.match(/[.!?]/g);

    if (matches) {
      sentences = matches.length;
    } else {
      sentences = 1;
    }
  }

  return {
    characters,
    words,
    sentences,
  };
}

module.exports = analyzeText;