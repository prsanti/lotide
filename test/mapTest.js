const _ = require('../index');

// Test Code
const words = ["ground", "control", "to", "major", "tom"];

const results1 = _.map(words, word => word[0]);
const results2 = _.map(["hello", "world"], word => word[0]);
const results3 = _.map([1, 2, 3, 4, 5], num => num * 2);

_.assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
_.assertArraysEqual(results2, ["h", "w"]);
_.assertArraysEqual(results3, [2, 4, 6, 8, 10]);