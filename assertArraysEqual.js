const eqArrays = function(firstArray, secondArray) {
  let equal = false;
  if (firstArray.length !== secondArray.length) {
    equal = false;
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

// Test Code
assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual(["a", "b"], ["a", "b"]); //pass
assertArraysEqual([1, 2, 3], [1, 2, 4]); // fail
assertArraysEqual([1, 2, 3], [1, 2, "3"]); // fail