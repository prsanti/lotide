const _ = require('../index');

// Test Code
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
_.assertEqual(_.eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
_.assertEqual(_.eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
_.assertEqual(_.eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
_.assertEqual(_.eqObjects(cd, cd2), false);