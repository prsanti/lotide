// DRY Code
const eqArrays = require('./eqArrays');

// const eqArrays = function(firstArray, secondArray) {
//   let equal = false;
//   if (firstArray.length !== secondArray.length) {
//     equal = false;
//   } else if (firstArray.length === secondArray.length && firstArray.length === 0 && secondArray.length === 0) {
//     equal = true;
//   } else {
//     for (let i = 0; i < firstArray.length; i++) {
//       firstArray[i] === secondArray[i] ? equal = true : equal = false;
//     }
//   }
//   return equal;
// };

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

module.exports = assertArraysEqual;

// Test Code
// assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
// assertArraysEqual(["a", "b"], ["a", "b"]); //pass
// assertArraysEqual([1, 2, 3], [1, 2, 4]); // fail
// assertArraysEqual([1, 2, 3], [1, 2, "3"]); // fail