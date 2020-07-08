function arrayMaxConsecutiveSum(inputArray, k) {
  const chunk = inputArray.slice(0,k)
  let sum = chunk.reduce((acc, cur) => acc + cur, 0)
  let max = sum

  for (let i = k; i < inputArray.length; i++) {
      const current = inputArray[i]
      const previous = inputArray[i-k]
      sum = sum - previous + current

      if (sum > max) max = sum
  }
  return max
}
