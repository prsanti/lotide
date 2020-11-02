const tail = require('../tail');
const assert = require('chai').assert;


describe("#tail", () => {
  // Test Case 1: Check the returned array elements
  const result = tail(["Hello", "Lighthouse", "Labs"]);

  it("returns 2 to ensure we get back two elements", () => {
    assert.strictEqual(result.length, 2);
  });

  it("returns 'Lighthouse' to ensure the first element is 'Lighthouse'", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("returns 'Labs' to ensure the second element is 'Labs'", () => {
    assert.strictEqual(result[1], "Labs");
  });

  // Test Case: 1 element array
  const oneElementArray = tail([1]);
  it("returns empty array when inputting an array with one element", () => {
    assert.deepEqual(oneElementArray, []);
  });

  // Test Case: Check the original array
  const words = ["Yo Yo", "Lighthouse", "Labs"];

  tail(words);

  it("original array should still have 3 elements", () => {
    assert.strictEqual(words.length, 3);
  });

  // Empty array test
  const empty = tail([]);
  it("empty array returns an empty array", () => {
    assert.deepEqual(empty, []);
  });
});