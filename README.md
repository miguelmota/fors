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

});
```

which is the same as doing:

```javascript
for (var i = 0; i <= 9; i++) {
  for (var j = 0; j <= 9; j++) {
    for (var k = 0; k <= 9; k++) {
      for (var l = 0; l <= 9; l++) {
        // callback(i, j, k, l);
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

});
```

which is the same as doing:

```javascript
for (var i = 2; i <= 6; i++) {
  for (var j = 2; j <= 6; j++) {
    for (var k = 2; k <= 6; k++) {
      for (var l = 2; l <= 6; l++) {
        // callback(i, j, k, l);
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
