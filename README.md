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
npm install array-prefix
```
