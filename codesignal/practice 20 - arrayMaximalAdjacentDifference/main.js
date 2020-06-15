function arrayMaximalAdjacentDifference(inputArray) {
  let maxAbs = 0
  for (let i = 0; i < inputArray.length - 1; i++) {
      const diff = inputArray[i] - inputArray[i+1]
      const abs = Math.abs(diff)
      if (maxAbs < abs) maxAbs = abs
  }
  return maxAbs;
}


/* Other solutions

function arrayMaximalAdjacentDifference(inputArray) {
  return inputArray.reduce((max, integer, index, input) => {
    return index &&
           Math.max(max, Math.max(Math.abs(integer - input[index - 1]), Math.abs(input[index - 1] - integer)))
  }, 0)
}

*/
