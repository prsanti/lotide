const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

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

// const assertArraysEqual = function(firstArray, secondArray) {
//   if (eqArrays(firstArray, secondArray)) {
//     console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
//   }
// };

const takeUntil = function(array, callback) {
  for (const item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item));
    }
  }
};

module.exports = takeUntil;

// Test Cases
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);