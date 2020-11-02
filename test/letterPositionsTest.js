const _ = require('../index');

// Test Code
const example = "hello";
// console.log(_.letterPositions(example));

_.assertEqual(_.eqArrays(_.letterPositions(example)["h"], [0]), true);
_.assertEqual(_.eqArrays(_.letterPositions(example)["e"], [1]), true);
_.assertEqual(_.eqArrays(_.letterPositions(example)["l"], [2, 3]), true);
_.assertEqual(_.eqArrays(_.letterPositions(example)["o"], [4]), true);

const exampleTwo = "lighthouse in the house";
// console.log(_.letterPositions(exampleTwo));

_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["l"], [0]), true);
_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["i"], [1, 11]), true);
_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["g"], [2]), true);
_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["h"], [3, 5, 15, 18]), true);
_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["t"], [4, 14]), true);
_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["o"], [6, 19]), true);
_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["u"], [7, 20]), true);
_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["s"], [8, 21]), true);
_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["e"], [9, 16, 22]), true);
_.assertEqual(_.eqArrays(_.letterPositions(exampleTwo)["n"], [12]), true);