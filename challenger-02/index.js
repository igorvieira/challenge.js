function formSentence (words) {
  return words.join().replace(/,/g, ' ')
};

module.exports = formSentence