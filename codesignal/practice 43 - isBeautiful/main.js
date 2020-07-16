function isBeautifulString(inputString) {
  const charCount = {}
  for (const char of inputString) {
      !charCount[char] ? charCount[char] = 1 : charCount[char]++
  }
  let starting = 'a'.charCodeAt(0)
  while (Object.keys(charCount).length > 0) {
      const currentLetter = String.fromCharCode(starting)
      const nextLetter = String.fromCharCode(starting + 1)
      const current = charCount[String.fromCharCode(starting)]
      const next = charCount[nextLetter]
      if (!current || current < next) return false
      delete charCount[currentLetter]
      starting++
  }
  return true
}


/* Other Solutions

function isBeautifulString(inputString) {
    s = "abcdefghijklmnopqrstuvwxyz"
    for (i = 1; i < s.length; i++) {
        if (inputString.split(s[i]).length-1 > inputString.split(s[i-1]).length-1) {
            return false}}
    return true
}

function isBeautifulString(inputString) {
  const occurrences = [...inputString].reduce((occurrences, char) => ({
    ...occurrences,
    [char]: char in occurrences ? occurrences[char] + 1 : 1
  }), {})
  const chars = Object.keys(occurrences).sort()
  for (let i = chars.length - 1; i >= 0; i--) {
    const currentChar = chars[i]
    if (currentChar === 'a') return true
    const previousChar = String.fromCharCode(currentChar.charCodeAt(0) - 1)
    if (!(previousChar in occurrences) ||
        occurrences[previousChar] < occurrences[currentChar]) {
      return false
    }
  }
}

*/
