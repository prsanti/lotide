const _ = require('../index');

// Test Code
_.assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
_.assertArraysEqual(["a", "b"], ["a", "b"]); //pass
_.assertArraysEqual([1, 2, 3], [1, 2, 4]); // fail
_.assertArraysEqual([1, 2, 3], [1, 2, "3"]); // fail