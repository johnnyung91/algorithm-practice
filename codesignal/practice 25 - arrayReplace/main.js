function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(x => x === elemToReplace ? substitutionElem : x)
}
