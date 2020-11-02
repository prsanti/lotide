const _ = require('../index');

// Test Code
const word = "lighthouse in the house";
console.log(_.countLetters(word));
_.assertEqual(_.countLetters(word)["l"], 1);
_.assertEqual(_.countLetters(word)["i"], 2);
_.assertEqual(_.countLetters(word)["g"], 1);
_.assertEqual(_.countLetters(word)["h"], 4);
_.assertEqual(_.countLetters(word)["t"], 2);
_.assertEqual(_.countLetters(word)["o"], 2);
_.assertEqual(_.countLetters(word)["u"], 2);
_.assertEqual(_.countLetters(word)["s"], 2);
_.assertEqual(_.countLetters(word)["e"], 3);
_.assertEqual(_.countLetters(word)["n"], 1);
_.assertEqual(_.countLetters(word)[" "], undefined);