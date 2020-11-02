const middle = function(array) {
  const arrLength = array.length;
  const middleIndex = [];
  let output = [];

  if (arrLength === 1 || arrLength === 2) {
    return output;
  } else if (arrLength % 2 !== 0) {
    middleIndex.push(Math.floor(arrLength / 2));
    output.push(array[middleIndex]);
  } else {
    middleIndex.push((arrLength / 2) - 1);
    middleIndex.push(arrLength / 2);

    output.push(array[middleIndex[0]]);
    output.push(array[middleIndex[1]]);
  }

  return output;
};

module.exports = middle;