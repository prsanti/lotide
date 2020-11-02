const _ = require('../index');

// Test Code
_.assertEqual(_.eqArrays(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);
_.assertEqual(_.eqArrays(_.flatten([[1, 2], [[[3, 4]]], [5, [6]]]), [1, 2, 3, 4, 5, 6]), true);
_.assertEqual(_.eqArrays(_.flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);