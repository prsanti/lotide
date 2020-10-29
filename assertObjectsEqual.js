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

const eqObjects = function(object1, object2) {
  let equal = true;
  const object1Length = Object.keys(object1).length;
  const object2Length = Object.keys(object2).length;

  if (object1Length !== object2Length) {
    equal = false;
  } else {
    for (const key1 in object1) {
      for (const key2 in object2) {
        if (key1 === key2) {
          if (Array.isArray(object1[key1])) {
            equal = eqArrays(object1[key1], object2[key2]);
          } else if (object1[key1] !== object2[key2]) {
            equal = false;
          }
        }
      }
    }
  }

  return equal;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const example = { a: '1', b: 2 };
const expectedExample = { b: 2, a: '1' };

assertObjectsEqual(example, expectedExample);


