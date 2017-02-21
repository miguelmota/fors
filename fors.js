(function (root) {
  'use strict';

  var defaultFrom = 0;
  var defaultTo = 9;

  function normalize(loop) {
    var result = {
      from: defaultFrom,
      to: defaultTo
    };

    if (Array.isArray(loop)) {
      result.from = typeof loop[0] === 'number' ? loop[0] : defaultFrom;
      result.to = typeof loop[1] === 'number' ? loop[1] : defaultTo;
    } else if (typeof loop === 'object') {
      result.from = typeof loop.from === 'number' ? loop.from : defaultFrom;
      result.to = typeof loop.to === 'number' ? loop.to : defaultTo;
    }

    return result;
  }

  function setFrom(loop) {
    return loop.from;
  }

  function setTo(loop) {
    return loop.to;
  }

  function fors(loops, callback, context) {
    if (typeof loops === 'number') {
      loops = '#'.repeat(loops).split('');
    } else if (!Array.isArray(loops)) {
      loops = [];
    }

    if (!loops.length) {
      return false;
    }

    loops = loops.map(normalize);

    var lastLoop = loops.length - 1;
    var min = loops.map(setFrom);
    var numbers = min.slice(0);
    var max = loops.map(setTo);

    var index = lastLoop;

    while (true) {
      var response = callback.apply(context || null, numbers);
      if ((typeof response === 'object') && (response.canSkip)) {
        index = response.skipIndex;
        numbers[index]++;
        for (var i = index + 1; i <= lastLoop; i++) {
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
