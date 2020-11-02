const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const flatten = require('../flatten');

// Test Code
assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);
assertEqual(eqArrays(flatten([[1, 2], [[[3, 4]]], [5, [6]]]), [1, 2, 3, 4, 5, 6]), true);
assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);