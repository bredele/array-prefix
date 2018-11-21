/**
 * Test dependencies
 */

const test = require('tape')
const prefix = require('..')

test('should filter array of strings containing given string', assert => {
  assert.plan(1)
  assert.deepEqual(
    prefix('he', ['hello', 'hector', 'hell', 'world', 'worm']),
    ['hello', 'hector', 'hell']
  )
})

test('should filter array of strings prefixerd given string', assert => {
  assert.plan(1)
  assert.deepEqual(
    prefix('he', ['hello', 'hector', 'hell', 'cardiocatheterization', 'world', 'worm']),
    ['hello', 'hector', 'hell']
  )
})

test('should filter array and sort output', assert => {
  assert.plan(1)
  assert.deepEqual(
    prefix('he', ['hello', 'hector', 'hell', 'world', 'worm'], true),
    ['hector', 'hell', 'hello']
  )
})
