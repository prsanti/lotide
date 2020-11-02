const _ = require('../index');

// Test Code
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
_.assertEqual(_.findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);