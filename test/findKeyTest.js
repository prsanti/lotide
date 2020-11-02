const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

// Test Code
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => pass

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars > 2), "Akaleri"); // => Pass

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKey(bestTVShowsByGenre, x => x === "The Wire"), "drama"); // => Pass
assertEqual(findKey(bestTVShowsByGenre, x => x === "The Expanse"), "sci_fi"); // => Pass
assertEqual(findKey(bestTVShowsByGenre, x => x === "Brooklyn Nine-Nine"), "comedy"); // => Pass
assertEqual(findKey(bestTVShowsByGenre, x => x === "That '70s Show"), undefined); // => Pass