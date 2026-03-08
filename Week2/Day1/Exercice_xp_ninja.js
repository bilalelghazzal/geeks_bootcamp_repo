function mergeWords(word) {
  let words = [word];

  function next(nextWord) {
    if (typeof nextWord === 'undefined') {
      return words.join(' ');
    }
    words.push(nextWord);
    return next;
  }

  return next;
}
