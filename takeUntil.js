const takeUntil = function(array, callback) {
  for (const item of array) {
    if (callback(item)) {
      return array.slice(0, array.indexOf(item));
    }
  }
};

module.exports = takeUntil;