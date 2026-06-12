/**
 * Traverse a matrix in spiral order.
 * @param {Array[]} matrix
 * @returns {Array}
 */
function traverseSpiral(matrix) {
  if (matrix === undefined) {
    throw new Error('Matrix cannot be undefined');
  }

  if (!Array.isArray(matrix)) {
    throw new Error('Matrix must be an array');
  }

  if (matrix.length === 0) {
    return [];
  }

  const columnCount = matrix[0].length;

  if (matrix.some((row) => !Array.isArray(row) || row.length !== columnCount)) {
    throw new Error('Matrix rows must have equal lengths');
  }

  const result = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = columnCount - 1;

  while (top <= bottom && left <= right) {
    for (let column = left; column <= right; column += 1) {
      result.push(matrix[top][column]);
    }
    top += 1;

    for (let row = top; row <= bottom; row += 1) {
      result.push(matrix[row][right]);
    }
    right -= 1;

    if (top <= bottom) {
      for (let column = right; column >= left; column -= 1) {
        result.push(matrix[bottom][column]);
      }
      bottom -= 1;
    }

    if (left <= right) {
      for (let row = bottom; row >= top; row -= 1) {
        result.push(matrix[row][left]);
      }
      left += 1;
    }
  }

  return result;
}

module.exports = traverseSpiral;
