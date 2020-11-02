const letterPositions = function(sentence) {
  const results = {};
  
  for (const letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        let lastPosition = results[letter][results[letter].length - 1] + 1;
        results[letter].push(sentence.indexOf(letter, lastPosition));
      } else {
        results[letter] = [sentence.indexOf(letter)];
      }
    }
  }
  return results;
};

module.exports = letterPositions;