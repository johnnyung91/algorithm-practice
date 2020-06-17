function avoidObstacles(inputArray) {
  const max = Math.max(...inputArray)

  for (let i = 2; i < max; i++) {
      if (inputArray.every(index => index % i !== 0)) return i
  }
  return max + 1
}

/* Other solutions

function avoidObstacles(inputArray) {
  let smallest = 2
  let confirmed = false
  const largest = Math.max(...inputArray) + 1
  while (smallest < largest) {
    for (let i = 0; i < inputArray.length; i++) {
      if (!(inputArray[i] % smallest)) {
        smallest++
        break
      }
      if (i === inputArray.length - 1) return smallest
    }
  }
  return smallest
}

function avoidObstacles(inputArray) {
    let jumpLength = 2;
    while(!canPass(inputArray, jumpLength)) {
        jumpLength++;
    }
    return jumpLength;
}

function canPass(inputArray, num) {
    if(num <= 1) return false;
    for(const obstacle of inputArray) {
        if(obstacle % num === 0) return false;
    }
    return true;
}
