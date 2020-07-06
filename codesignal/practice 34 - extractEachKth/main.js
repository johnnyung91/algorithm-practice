function extractEachKth(inputArray, k) {
  return inputArray.filter((element, i) => (i + 1) % k)
}


/* Other solutions

function extractEachKth(inputArray, k) {
  return inputArray.reduce((extracted, element, index) =>
    (index + 1) % k
      ? extracted.concat(element)
      : extracted
  , [])
}


*/
