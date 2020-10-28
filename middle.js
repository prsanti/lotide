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

// ACTUAL FUNCTION
const middle = function(array) {
  const arrLength = array.length;
  const middleIndex = [];
  let output = [];

  if (arrLength === 1 || arrLength === 2) {
    return output;
  } else if (arrLength % 2 !== 0) {
    middleIndex.push(Math.floor(arrLength / 2));
    output.push(array[middleIndex]);
  } else {
    middleIndex.push((arrLength / 2) - 1);
    middleIndex.push(arrLength / 2);

    output.push(array[middleIndex[0]]);
    output.push(array[middleIndex[1]]);
  }

  return output;
};

// Test Code
// middle([1]) // => []
assertEqual(eqArrays(middle([1]), []), true);
// middle([1, 2]) // => []
assertEqual(eqArrays(middle([1, 2]), []), true);
// middle([1, 2, 3]) // => [2]
assertEqual(eqArrays(middle([1, 2, 3]), [2]), true);
// middle([1, 2, 3, 4, 5]) // => [3]
assertEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3]), true);
// middle([1, 2, 3, 4]) // => [2, 3]
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3]), true);
// middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4]), true);
assertEqual(eqArrays(middle([1, 2, 3, 4]), [3]), false);
assertEqual(eqArrays(middle([1, 2, 3, 4]), [2]), false);
