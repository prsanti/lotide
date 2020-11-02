const assertArraysEqual = require('../assertArraysEqual');

// Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual(["a", "b"], ["a", "b"]); //pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // fail
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // fail