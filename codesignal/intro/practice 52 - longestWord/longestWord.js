function longestWord(text) {
  const words = text.match(/([A-Za-z]+)/g)
  return words.reduce((longest, word) => longest.length > word.length ? longest : word)
}
