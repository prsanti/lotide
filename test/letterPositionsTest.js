const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const letterPositions = require('../letterPositions');

// Test Code
const example = "hello";
// console.log(letterPositions(example));

assertEqual(eqArrays(letterPositions(example)["h"], [0]), true);
assertEqual(eqArrays(letterPositions(example)["e"], [1]), true);
assertEqual(eqArrays(letterPositions(example)["l"], [2, 3]), true);
assertEqual(eqArrays(letterPositions(example)["o"], [4]), true);

const exampleTwo = "lighthouse in the house";
// console.log(letterPositions(exampleTwo));

assertEqual(eqArrays(letterPositions(exampleTwo)["l"], [0]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["i"], [1, 11]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["g"], [2]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["h"], [3, 5, 15, 18]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["t"], [4, 14]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["o"], [6, 19]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["u"], [7, 20]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["s"], [8, 21]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["e"], [9, 16, 22]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["n"], [12]), true);