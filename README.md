# fors

> Conveniently create nested `for` loops.

# Install

```bash
npm install fors
```

```bash
bower install fors
```

# Usage

```javascript
var fors = require('fors');

var depth = 4;

fors(depth, function callback(i, j, k, l) {
  console.log(i, j, k, l):
  /*
  0 0 0 0
  0 0 0 1
  0 0 0 2
  ...
  9 9 9 7
  9 9 9 8
  9 9 9 9
  */
});
```

which is the same as doing:

```javascript
for (var i = 0; i <= 9; i++) {
  for (var j = 0; j <= 9; j++) {
    for (var k = 0; k <= 9; k++) {
      for (var l = 0; l <= 9; l++) {
        console.log(i, j, k, l);
      }
    }
  }
}
```

Set a min and max:

```javascript
var depth = 4;
var min = 2;
var max = 6;

fors(depth, [min, max], function callback(i, j, k, l);
  console.log(i, j, k, l);
  /*
  2 2 2 2
  2 2 2 3
  2 2 2 4
  ...
  6 6 6 4
  6 6 6 5
  6 6 6 6
  */
});
```

which is the same as doing:

```javascript
for (var i = 2; i <= 6; i++) {
  for (var j = 2; j <= 6; j++) {
    for (var k = 2; k <= 6; k++) {
      for (var l = 2; l <= 6; l++) {
        console.log(i, j, k, l);
      }
    }
  }
}
```

# Test

```bash
npm test
```

# License

MIT
