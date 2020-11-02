const findKeyByValue = function(obj, value) {
  for (const element in obj) {
    if (obj[element] === value) {
      return element;
    }
  }
};

module.exports = findKeyByValue;