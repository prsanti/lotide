const eqArrays = function(firstArray, secondArray) {
  let equal = false;
  if (firstArray.length !== secondArray.length) {
    return false;
  } else if (firstArray.length === secondArray.length && firstArray.length === 0 && secondArray.length === 0) {
    equal = true;
  } else {
    for (let i = 0; i < firstArray.length; i++) {
      firstArray[i] === secondArray[i] ? equal = true : equal = false;
    }
  }
  return equal;
};

module.exports = eqArrays;