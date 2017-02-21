# fors

> Conveniently create nested [`for`](https://en.wikipedia.org/wiki/For_loop) loops in JavaScript.

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

Set a min and max for each loop:

```javascript
fors([[1, 9], [2, 8], [3, 7]], function callback(i, j, k, l) {
  console.log(i, j, k, l);
  /*
  1 2 3
  1 2 4
  1 2 5
  ...
  9 8 5
  9 8 6
  9 8 7
  */
});
```

which is the same as doing:

```javascript
for (var i = 1; i <= 9; i++) {
  for (var j = 2; j <= 8; j++) {
    for (var k = 3; k <= 7; k++) {
      console.log(i, j, k, l);
    }
  }
}
```

Alternative way using objects for range:

fors([{from: 1, to: 9}, {from: 2, to: 8}, {from: 3, to: 7}], function callback(i, j, k, l) {
  console.log(i, j, k, l);
});

# Test

```bash
npm test
```

# License

MIT
