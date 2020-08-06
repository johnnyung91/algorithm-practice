function palindromeRearranging(inputString) {
  const letters = {}

  for (let i=0; i < inputString.length; i++) {
      const letter = inputString[i]
      if (letters[letter] !== undefined) {
          delete letters[letter]
      } else {
          letters[letter] = 1
      }
  }

  const keys = Object.keys(letters)
  return (keys.length <= 1)

}


/* Other solutions

function palindromeRearranging(inputString) {
  const stack = [];
  [...inputString].sort().forEach(char => {
    stack[stack.length - 1] === char
      ? stack.pop()
      : stack.push(char)
  })
  return stack.length <= 1
}

function palindromeRearranging(inputString) {
    const charCount = {};
    let hasOdd = false;
    for(const letter of inputString) {
        if(charCount[letter] === undefined) {
            charCount[letter] = 0;
        }
        charCount[letter]++;
    }
    for(const char in charCount) {
        if(charCount[char] % 2 !== 0) {
            if(hasOdd) return false;
            hasOdd = true;
        }
    }
    return true;
}

function palindromeRearranging(inputString) {

    const occurrences = {};

    for(const o of inputString) {
        occurrences[o] = o in occurrences ? occurrences[o] + 1 : 1;
    }

    return Object.values(occurrences).filter(count => count % 2 === 1).length < 2;
}

*/
