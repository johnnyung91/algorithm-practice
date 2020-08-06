function differentSymbolsNaive(s) {
  const map = {};
  for (const char of s) {
      if (!map[char]) map[char] = true
  }
  return Object.keys(map).length
}

/* Other solutions

function differentSymbolsNaive(s) {
  return new Set(s).size
}

*/
