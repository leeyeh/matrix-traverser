(function() {
  'use strict';
  var traverse = function (matrix) {
    var result = [],
      n = matrix.length,
      // 按照镜像思考，最后 push result 的时候使用镜像下标 mirrorY
      //  ------ y
      // | 1 2 3
      // | 4 5 6
      // | 7 8 9
      // x
      // 变换坐标系的 y 轴为 sum 轴，得到正交坐标系
      //  ---------- sum
      // | 1 2 3
      // |   4 5 6
      // |     7 8 9
      sum, x, y, mirrorY;
    // 按照要求遍历上面这个菱形
    for ( sum = 0; sum <= 2 * n - 2; sum++) {
      // 菱形有四条边界
      // x >= 0
      // x >= sum - (n -1)
      // x <= n - 1
      // x <= sum
      for ( x = Math.max(0, sum - n + 1); x <= sum && x <= n - 1; x++) {
        y = sum - x;
        mirrorY = n - 1 - y;
        result.push(matrix[x][mirrorY]);
      }
    }
    return result;
  };

  if (typeof exports !== 'undefined') {
    exports.traverse = traverse;
  } else {
    var root = this;
    root.traverse = traverse;
  }
}.call(this));
