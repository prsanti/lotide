const _ = require('../index');

// Test Code
_.assertEqual(_.eqArrays(_.middle([1]), []), true);
_.assertEqual(_.eqArrays(_.middle([1, 2]), []), true);
_.assertEqual(_.eqArrays(_.middle([1, 2, 3]), [2]), true);
_.assertEqual(_.eqArrays(_.middle([1, 2, 3, 4, 5]), [3]), true);
_.assertEqual(_.eqArrays(_.middle([1, 2, 3, 4]), [2, 3]), true);
_.assertEqual(_.eqArrays(_.middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
_.assertEqual(_.eqArrays(_.middle([1, 2, 3, 4]), [3]), false);
_.assertEqual(_.eqArrays(_.middle([1, 2, 3, 4]), [2]), false);