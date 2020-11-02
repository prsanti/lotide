// DRY Code
const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   typeof actual === "string" ? actual = `"${actual}"` : null;
//   typeof expected === "string" ? expected = `"${expected}"` : null;
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const countLetters = function(sentence) {
  let output = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (output[letter]) {
        output[letter]++;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};

module.exports = countLetters;

// Test Code
// const word = "lighthouse in the house";
// console.log(countLetters(word));
// assertEqual(countLetters(word)["l"], 1);
// assertEqual(countLetters(word)["i"], 2);
// assertEqual(countLetters(word)["g"], 1);
// assertEqual(countLetters(word)["h"], 4);
// assertEqual(countLetters(word)["t"], 2);
// assertEqual(countLetters(word)["o"], 2);
// assertEqual(countLetters(word)["u"], 2);
// assertEqual(countLetters(word)["s"], 2);
// assertEqual(countLetters(word)["e"], 3);
// assertEqual(countLetters(word)["n"], 1);
// assertEqual(countLetters(word)[" "], undefined);