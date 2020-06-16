function avoidObstacles(inputArray) {
  const max = Math.max(...inputArray)

  for (let i = 2; i < max; i++) {
      if (inputArray.every(index => index % i !== 0)) return i
  }
  return max + 1
}
