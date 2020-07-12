function longestDigitsPrefix(inputString) {
  let prefix = '';
  for (const char of inputString) {
      if (isNaN(char) || char === ' ') return prefix
      prefix += char
  }
  return prefix
}
