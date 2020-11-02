const tail = (array) => {
  if (array) {
    return array.slice(1);
  } else {
    return [];
  }
};

module.exports = tail;