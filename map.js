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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
const results2 = map(["hello", "world"], word => word[0]);
const results3 = map([1, 2, 3, 4, 5], num => num * 2);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(results2, ["h", "w"]);
assertArraysEqual(results3, [2, 4, 6, 8, 10]);