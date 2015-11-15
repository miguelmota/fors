(function(root) {
  'use strict';

  function fors(depth, max, callback, context) {
    var numbers = [];
    var min = 0;

    if (typeof max === 'function') {
      callback = max;
    }

    if (typeof max !== 'number') {
      if (Array.isArray(max)) {
        min = max[0];
        max = max[1];
      } else {
        max = 9;
      }
    }

    for (var i = 0; i < depth; i++) {
      numbers[i] = min;
    }

    var index = depth - 1;

    while(true) {
      callback.apply(context||null, numbers);
      numbers[index]++;

      while(numbers[index] === max + 1) {
        if (index === 0) {
          return numbers;
        }

        numbers[index--] = min;
        numbers[index]++;
      }

      index = depth - 1;
    }

  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = fors;
    }
    exports.fors = fors;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return fors;
    });
  } else {
    root.fors = fors;
  }

})(this);
