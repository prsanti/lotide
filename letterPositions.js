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

const letterPositions = function(sentence) {
  const results = {};
  
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        let lastPosition = results[letter][results[letter].length - 1] + 1;
        results[letter].push(sentence.indexOf(letter, lastPosition));
      } else {
        results[letter] = [sentence.indexOf(letter)];
      }
    }
  }
  return results;
};


const example = "hello";
console.log(letterPositions(example));

assertEqual(eqArrays(letterPositions(example)["h"], [0]), true);
assertEqual(eqArrays(letterPositions(example)["e"], [1]), true);
assertEqual(eqArrays(letterPositions(example)["l"], [2, 3]), true);
assertEqual(eqArrays(letterPositions(example)["o"], [4]), true);

const exampleTwo = "lighthouse in the house";
console.log(letterPositions(exampleTwo));

assertEqual(eqArrays(letterPositions(exampleTwo)["l"], [0]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["i"], [1, 11]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["g"], [2]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["h"], [3, 5, 15, 18]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["t"], [4, 14]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["o"], [6, 19]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["u"], [7, 20]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["s"], [8, 21]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["e"], [9, 16, 22]), true);
assertEqual(eqArrays(letterPositions(exampleTwo)["n"], [12]), true);