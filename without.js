const eqArrays = function(firstArray, secondArray) {
  let equal = false;
  if (firstArray.length !== secondArray.length) {
    equal = false;
  } else if (firstArray.length === secondArray.length && firstArray.length === 0 && secondArray.length === 0) {
    equal = true;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      firstArray[i] === secondArray[i] ? equal = true : equal = false;
    }
  }
  return equal;
};

const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray)) {
    console.log(`✅✅✅ Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const without = function(source, itemsToRemove) {
  let withoutArray = [];

  for (let i = 0; i < source.length; i++) {
    // determines the index in the itemsToRemove array if it contains source[i]
    // index = -1 if source[i] is NOT in itemsToRemove, otherwise index >= 0
    const index = itemsToRemove.indexOf(source[i]);
    index === -1 ? withoutArray.push(source[i]) : null;
  }
  
  return withoutArray;
};

// Test cases
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
