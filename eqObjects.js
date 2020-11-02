const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;