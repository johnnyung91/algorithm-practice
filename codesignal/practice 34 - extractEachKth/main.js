function extractEachKth(inputArray, k) {
  return inputArray.filter((element, i) => (i + 1) % k !== 0)
}
