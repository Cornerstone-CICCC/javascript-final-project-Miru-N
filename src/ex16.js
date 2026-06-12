/**
 * Determine whether every opening bracket has a matching closing bracket
 * in the correct order. The string may contain (), [], and {}.
 * @param {string} brackets
 * @returns {boolean}
 */
function checkBalancedBrackets(brackets) {
  if (brackets === undefined) {
    throw new Error('String cannot be undefined');
  }

  if (typeof brackets !== 'string') {
    throw new Error('Argument must be a string');
  }

  if (![...brackets].every((bracket) => '()[]{}'.includes(bracket))) {
    throw new Error('String can only contain brackets');
  }

  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const bracket of brackets) {
    if (bracket === '(' || bracket === '[' || bracket === '{') {
      stack.push(bracket);
    } else {
      const lastOpening = stack.pop();

      if (lastOpening !== pairs[bracket]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

module.exports = checkBalancedBrackets;