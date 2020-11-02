const assertObjectsEqual = require('../assertObjectsEqual');

// Test Code
const example = { a: '1', b: 2 };
const expectedExample = { b: 2, a: '1' };
assertObjectsEqual(example, expectedExample);