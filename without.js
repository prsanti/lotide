const without = function(source, itemsToRemove) {
  let withoutArray = [];

  for (let i = 0; i < source.length; i++) {
    // determines the index in the itemsToRemove array if it contains source[i]
    // index = -1 if source[i] is NOT in itemsToRemove, otherwise index >= 0
    const index = itemsToRemove.indexOf(source[i]);
    index === -1 ? withoutArray.push(source[i]) : null;
  }
  
  return withoutArray;
};

module.exports = without;