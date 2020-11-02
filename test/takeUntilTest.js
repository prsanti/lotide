const _ = require('../index');

// Test Cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = _.takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = _.takeUntil(data2, x => x === ',');
console.log(results2);

_.assertArraysEqual(_.takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
_.assertArraysEqual(_.takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);