const assertEqual = require('./assertEqual');
// const assertEqual = function(actual, expected) {
//   // adds "" before and after actual and expected if they are strings
//   typeof actual === "string" ? actual = `"${actual}"` : null;
//   typeof expected === "string" ? expected = `"${expected}"` : null;
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(firstArray, secondArray) {
  let equal = false;
  if (firstArray.length !== secondArray.length) {
    return false;
  } else if (firstArray.length === secondArray.length && firstArray.length === 0 && secondArray.length === 0) {
    equal = true;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      firstArray[i] === secondArray[i] ? equal = true : equal = false;
    }
  }
  return equal;
};

module.exports = eqArrays;

// Test Code
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS