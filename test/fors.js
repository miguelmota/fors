const test = require('tape');
const fors = require('../fors');

test('fors', function (t) {
  'use strict';

  t.plan(3);

  var values_A = [];

  for (var i = 0; i <= 9; i++) {
    for (var j = 0; j <= 9; j++) {
      for (var k = 0; k <= 9; k++) {
        for (var l = 0; l <= 9; l++) {
          values_A.push([i, j, k, l].join(''));
        }
      }
    }
  }

  var values_B = [];

  fors(4, function(i, j, k, l) {
    values_B.push([i, j, k, l].join(''));
  });

  t.deepEqual(values_A, values_B);

  var values_C = [];

  fors(4, 9, function(i, j, k, l) {
    values_C.push([i, j, k, l].join(''));
  });

  t.deepEqual(values_A, values_C);

  var values_D = [];

  for (var i = 2; i <= 6; i++) {
    for (var j = 2; j <= 6; j++) {
      for (var k = 2; k <= 6; k++) {
        for (var l = 2; l <= 6; l++) {
          values_D.push([i, j, k, l].join(''));
        }
      }
    }
  }

  var values_E = [];

  fors(4, [2, 6], function(i, j, k, l) {
    values_E.push([i, j, k, l].join(''));
  });

  t.deepEqual(values_D, values_E);
});
