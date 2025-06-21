const test = require("node:test");
const assert = require("node:assert");
const prefix = require("..");

test("should filter array of strings containing given string", () => {
  assert.deepEqual(prefix("he", ["hello", "hector", "hell", "world", "worm"]), [
    "hello",
    "hector",
    "hell",
  ]);
});

test("should filter array of strings prefixerd given string", () => {
  assert.deepEqual(
    prefix("he", [
      "hello",
      "hector",
      "hell",
      "cardiocatheterization",
      "world",
      "worm",
    ]),
    ["hello", "hector", "hell"]
  );
});

test("should filter array and sort output", () => {
  assert.deepEqual(
    prefix("he", ["hello", "hector", "hell", "world", "worm"], true),
    ["hector", "hell", "hello"]
  );
});

test("should return empty array if no string prefixed with given input", () => {
  assert.deepEqual(
    prefix("ol", ["hello", "hector", "hell", "world", "worm"]),
    []
  );
});
