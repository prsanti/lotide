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

const findKeyByValue = function(obj, value) {
  for (const element in obj) {
    if (obj[element] === value) {
      return element;
    }
  }
};

module.exports = findKeyByValue;

// Test Code
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);