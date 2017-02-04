const test = require('tape');
const fors = require('../fors');

test('fors', function (t) {
  'use strict';

  t.plan(6);

  var values_A = [];

  var loopConfig = Object.create(null);

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

  fors([loopConfig, loopConfig, loopConfig, loopConfig], function(i, j, k, l) {
    values_B.push([i, j, k, l].join(''));
  });

  t.deepEqual(values_A, values_B);

  loopConfig.from = 0;
  loopConfig.to = 9;

  var values_C = [];

  fors([loopConfig, loopConfig, loopConfig, loopConfig], function(i, j, k, l) {
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

  loopConfig.from = 2;
  loopConfig.to = 6;

  var values_E = [];

  fors([loopConfig, loopConfig, loopConfig, loopConfig], function(i, j, k, l) {
    values_E.push([i, j, k, l].join(''));
  });

  t.deepEqual(values_D, values_E);

  var values_F = [];

  for (var i = 1; i <= 9; i++) {
    for (var j = 2; j <= 8; j++) {
      for (var k = 3; k <= 7; k++) {
        values_F.push([i, j, k].join(''));
      }
    }
  }

  var loops = [
    { from: 1, to: 9 },
    { from: 2, to: 8 },
    { from: 3, to: 7 }
  ];

  var values_G = [];

  fors(loops, function(i, j, k) {
    values_G.push([i, j, k].join(''));
  });

  t.deepEqual(values_F, values_G);

  // test for skipping

  var values_H = [];

  for (var i = 0; i <= 3; i++) {
    for (var j = 0; j <= 3; j++) {
      for (var k = 0; k <= 3; k++) {
        if ((i + j + k) <= 4) {
          values_H.push([i, j, k].join(''));
        }
      }
    }
  }

  var loops = [
    { from: 0, to: 3 },
    { from: 0, to: 3 },
    { from: 0, to: 3 }
  ];

  var context = { counter: 0 }
  var values_I = [];

  fors(loops, function(i, j, k) {
    this.counter += 1;
    values_I.push([i, j, k].join(''));
    var total = i + j;
    if (total === 4) {
      return { canSkip: true, skipIndex: 0 }
    }
    total += k;
    if (total === 4) {
      return { canSkip: true, skipIndex: 1 }
    }
    return { canSkip: false }
  }, context);

  t.deepEqual(values_H, values_I);
  t.equal(values_I.length, context.counter);
});
