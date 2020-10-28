const assertEqual = function(actual, expected) {
  // adds "" before and after actual and expected if they are strings
  typeof actual === "string" ? actual = `"${actual}"` : null;
  typeof expected === "string" ? expected = `"${expected}"` : null;
  if (actual === expected) {
    // ES6 method
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    // ES6 method
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let results = {};

  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (results[item]) {
        results[item]++;
      } else {
        results[item] = 1;
      }
    }
  }

  return results;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

//  console.log(result1);
//  console.log(result1["Karima"]);
//  console.log(result1["Agouhanna"]);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

// My original solution

// for (const countedItem in itemsToCount) {
//   if (itemsToCount[countedItem]) {
//     for (const item of allItems) {
//       if (item === countedItem) {
//         if (results[countedItem]) {
//           results[countedItem]++;
//         } else {
//           results[countedItem] = 1;
//         }
//       }
//     }
//   }
// }