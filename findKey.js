// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // adds "" before and after actual and expected if they are strings
  typeof actual === "string" ? actual = `"${actual}"` : null;
  typeof expected === "string" ? expected = `"${expected}"` : null;
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (object, callback) => {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

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