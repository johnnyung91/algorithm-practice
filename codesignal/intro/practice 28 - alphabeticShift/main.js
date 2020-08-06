function alphabeticShift(inputString) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  const stringArray = inputString.split('')
  const shifted = stringArray.map(letter => {
      let newIndex = 0
      if (letter !== 'z') newIndex = alphabet.indexOf(letter) + 1
      return alphabet[newIndex]
  })
  return shifted.join('')
}

/* Other Solutions

function alphabeticShift(inputString) {
  return [...inputString]
    .map(char => char === 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1))
    .join('')
}

function alphabeticShift(inputString) {
    let outputString = '';

    const minCode = 'a'.charCodeAt(0);
    const lettersInAlphabet = 26;

    for(let i = 0; i < inputString.length; i++) {
        const nextCharCodeFromA = (inputString.charCodeAt(i) + 1 - minCode) % lettersInAlphabet;
        outputString += String.fromCharCode(nextCharCodeFromA + minCode);
    }

    return outputString;
}


*/
