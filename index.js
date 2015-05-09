'use strict';
module.exports.traverse = function (matrix) {
  var result = [],
    n = matrix.length,
    sum, x, y, mirrorY;
  for ( sum = 0; sum <= 2 * n - 2; sum++) {
    for ( x = Math.max(0, sum - n + 1); x <= sum && x < n; x++) {
      y = sum - x;
      mirrorY = n - 1 - y;
      result.push(matrix[x][mirrorY]);
    }
  }
  return result;
};
