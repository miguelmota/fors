(function (root) {
  'use strict';

  function fors(loops, callback, context) {
    var defaultFrom = 0;
    var defaultTo = 9;
    var numbers;
    var min;
    var max;
    var lastLoop = loops.length - 1;
    var i;

    var setFrom = function (loop) {
      var fromUndefined = (typeof loop.from === 'undefined');
      return fromUndefined ? defaultFrom : loop.from;
    };

    var setTo = function (loop) {
      var toUndefined = (typeof loop.to === 'undefined');
      return toUndefined ? defaultTo : loop.to;
    };

    min = loops.map(function (x) {
      return setFrom(x);
    });
    numbers = min.map(function (x) {
      return x;
    });
    max = loops.map(function (x) {
      return setTo(x);
    });

    var index = lastLoop;

    while (true) {
      var response = callback.apply(context || null, numbers);
      if ((typeof response === 'object') && (response.canSkip)) {
        index = response.skipIndex;
        numbers[index]++;
        for (i = index + 1; i <= lastLoop; i++) {
          numbers[i] = min[i];
        }
      } else {
        numbers[index]++;
      }

      while (numbers[index] === max[index] + 1) {
        if (index === 0) {
          return numbers;
        }

        numbers[index] = min[index];
        index--;
        numbers[index]++;
      }

      index = lastLoop;
    }

  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = fors;
    }
    exports.fors = fors;
  } else if (typeof define === 'function' && define.amd) {
    define([], function () {
      return fors;
    });
  } else {
    root.fors = fors;
  }

})(this);
