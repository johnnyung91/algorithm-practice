function firstDigit(inputString) {
  for (let i = 0; i < inputString.length; i++) {
      const current = inputString[i]
      const number = parseInt(current)
      if (!isNaN(number)) return current
  }
}

/* Other Solution

function firstDigit(inputString) {
  return inputString.match(/\d/)[0]
}


*/
