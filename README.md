# array-prefix

[![NPM](https://img.shields.io/npm/v/array-prefix.svg)](https://www.npmjs.com/package/array-prefix)
[![Downloads](https://img.shields.io/npm/dm/array-prefix.svg)](http://npm-stat.com/charts.html?package=array-prefix)

Filter list of words prefixed with given string (ideal for autocompletion)


## Usage


```js
const find = require('array-prefix')

prefix('he', ['hello', 'hector', 'hell', 'world', 'worm'])
// => ['hello', 'hector', 'hell']

// sort output
prefix('he', ['hello', 'hector', 'hell', 'world', 'worm'], true)
// => ['hector', 'hell', 'hello']
```


## Installation

```sh
$ npm install array-prefix
```

## License

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
