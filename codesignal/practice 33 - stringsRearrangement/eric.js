function stringsRearrangement(inputArray) {
  const matchMap = {};
  const duplicateCount = {};
  const matchCount = {};
  for (let i = 0; i < inputArray.length; i++) {
    const currentString = inputArray[i];
    let totalHits = 0;
    let occurrences = 0;
    for (let j = 0; j < inputArray.length; j++) {
      if (i === j) continue;
      const otherString = inputArray[j];
      const match = compareTwoStrings(currentString, otherString);
      if (match) totalHits += 1;
      if (currentString === otherString) occurrences === 0 ? (occurrences = 2) : occurrences++;
    }
    matchMap[totalHits] === undefined ? (matchMap[totalHits] = 1) : (matchMap[totalHits] += 1);
    if (duplicateCount[currentString] === undefined) duplicateCount[currentString] = occurrences;
    if (matchCount[currentString] === undefined) matchCount[currentString] = totalHits;
  }
  for (const key in matchMap) {
    if (key === "0" || (key === "1" && matchMap[key] > 2)) return false;
  }
  for (const string in duplicateCount) {
    if (
      duplicateCount[string] - 1 === matchCount[string] &&
      duplicateCount[string] + matchCount[string] === inputArray.length
    )
      continue;
    if (duplicateCount[string] > matchCount[string]) return false;
    if (duplicateCount[string] === matchCount[string] && duplicateCount[string] > 2) return false;
    if (duplicateCount[string] === matchCount[string] && matchMap[1] !== undefined) return false;
  }
  return true;
}
function compareTwoStrings(str1, str2) {
  let mismatches = 0;
  for (let i = 0; i < str1.length; i++) {
    const str1char = str1[i];
    const str2char = str2[i];
    if (str1char !== str2char) {
      mismatches++;
    }
  }
  return mismatches === 1;
}
