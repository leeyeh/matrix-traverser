'use strict';
require('should');
var traverse = require('../').traverse;

function matrixGenerator(n) {
  var matrix = [], i = 0;
  for (var x = 0; x < n; x++) {
    matrix[x] = [];
    for (var y = 0; y < n; y++) {
      i++;
      matrix[x].push(i);
    }
  }
  return matrix;
}

describe('matrix-traverser node module', function () {
  it('traverse', function () {
    traverse(matrixGenerator(0)).should.eql([]);
    traverse(matrixGenerator(1)).should.eql([1]);
    traverse(matrixGenerator(2)).should.eql([2,1,4,3]);
    traverse(matrixGenerator(4)).should.eql([4,3,8,2,7,12,1,6,11,16,5,10,15,9,14,13]);
  });
});
