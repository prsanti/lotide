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

module.exports = assertEqual;

/*
    // Old concatenate method with +
    // console.log("✅✅✅" + " Assertion Passed: " + actual + " === " + expected);

    // ES6 method
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

        // Old concatenate method with +
    // console.log("🛑🛑🛑" + " Assertion Failed: " + actual + " !== " + expected);

    // ES6 method
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
*/