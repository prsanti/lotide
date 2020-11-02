const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly');

// Test Code
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