const _ = require('../index');

// Test Code
_.assertEqual(_.findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma"); // => pass

_.assertEqual(_.findKey({
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

_.assertEqual(_.findKey(bestTVShowsByGenre, x => x === "The Wire"), "drama"); // => Pass
_.assertEqual(_.findKey(bestTVShowsByGenre, x => x === "The Expanse"), "sci_fi"); // => Pass
_.assertEqual(_.findKey(bestTVShowsByGenre, x => x === "Brooklyn Nine-Nine"), "comedy"); // => Pass
_.assertEqual(_.findKey(bestTVShowsByGenre, x => x === "That '70s Show"), undefined); // => Pass