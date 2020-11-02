const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

// Test Code
const word = "lighthouse in the house";
console.log(countLetters(word));
assertEqual(countLetters(word)["l"], 1);
assertEqual(countLetters(word)["i"], 2);
assertEqual(countLetters(word)["g"], 1);
assertEqual(countLetters(word)["h"], 4);
assertEqual(countLetters(word)["t"], 2);
assertEqual(countLetters(word)["o"], 2);
assertEqual(countLetters(word)["u"], 2);
assertEqual(countLetters(word)["s"], 2);
assertEqual(countLetters(word)["e"], 3);
assertEqual(countLetters(word)["n"], 1);
assertEqual(countLetters(word)[" "], undefined);