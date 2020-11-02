const countLetters = function(sentence) {
  let output = {};
  for (const letter of sentence) {
    if (letter !== " ") {
      if (output[letter]) {
        output[letter]++;
      } else {
        output[letter] = 1;
      }
    }
  }
  return output;
};

module.exports = countLetters;