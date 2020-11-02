const _ = require('../index');

// Test cases
const words = ["hello", "world", "lighthouse"];
_.without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the _.without function
_.assertArraysEqual(words, ["hello", "world", "lighthouse"]);

_.assertArraysEqual(_.without([1, 2, 3], [1]), [2, 3]);
_.assertArraysEqual(_.without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);