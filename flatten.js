const assertEqual = function(actual, expected) {
  // adds "" before and after actual and expected if they are strings
  // typeof actual === "string" ? actual = `"${actual}"` : null;
  // typeof expected === "string" ? expected = `"${expected}"` : null;
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
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      firstArray[i] === secondArray[i] ? equal = true : equal = false;
    }
  }
  return equal;
};

const flatten = function(arrayList) {
  let flattenList = [];
  for (const element of arrayList) {
    Array.isArray(element) ? flattenList.push(...flatten(element)) : flattenList.push(element);
  }
  return flattenList;
};

// Test Code
console.log(flatten([[1, 2], [[[3, 4]]], [5, [6]]]));
console.log(flatten([1, 2, [3, 4], 5, [6]]));
assertEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]), true);

