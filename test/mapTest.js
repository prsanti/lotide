const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

// Test Code
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
const results2 = map(["hello", "world"], word => word[0]);
const results3 = map([1, 2, 3, 4, 5], num => num * 2);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ["h", "w"]);
assertArraysEqual(results3, [2, 4, 6, 8, 10]);