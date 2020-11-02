const _ = require('../index');
const assert = require('chai').assert;

// Test Code
describe("#middle", () => {
  it("returns an empty array when calling middle with 1 element", () => {
    assert.deepEqual(_.middle([1]), []);
  });

  it("returns an empty array when calling middle with 2 elements", () => {
    assert.deepEqual(_.middle([1, 2]), []);
  });

  it("returns [2] when calling middle with [1, 2, 3]", () => {
    assert.deepEqual(_.middle([1, 2, 3]), [2]);
  });

  it("returns [3] when calling middle with [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns [2, 3] when calling middle with [1, 2, 3, 4]", () => {
    assert.deepEqual(_.middle([1, 2, 3, 4]), [2, 3]);
  });

  it("calling middle with [1, 2, 3, 4] will not return [2]", () => {
    assert.notDeepEqual(_.middle([1, 2, 3, 4]), [2]);
  });
});