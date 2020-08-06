// function stringsRearrangement(inputArray) {
//   let endings = 0
//   for (let i = 0; i < inputArray.length; i++) {
//       let matches = 0
//       const current = inputArray[i]
//       for (let j = 0; j < inputArray.length; j++) {
//           const compare = inputArray[j]
//           if (difference(current, compare)) matches++
//       }
//       if (matches === 1) endings++
//       if (matches === 0 || endings > 2) return false
//       console.log(current, matches, endings)
//   }
//   return true
// }

// function difference(string1, string2) {
//   let diff = 0
//   for (let i = 0; i < string1.length; i++) {
//       if (string1[i] !== string2[i]) diff++
//   }
//   return diff === 1
// }

function stringsRearrangement(inputArray) {
  const matchMap = {};
  const duplicateCount = {};
  const matchCount = {};
  for (let i = 0; i < inputArray.length; i++) {
    const current = inputArray[i];
    let matches = 0;
    let occurances = 0;
    for (let j = 0; j < inputArray.length; j++) {
      if (i === j) continue;
      const compare = inputArray[j];
      const match = difference(current, compare);
      if (match) matches++;
      if (current === compare) occurances === 0 ? occurances = 2 : occurances++
    }
    !matchMap[matches] ? matchMap[matches] = 1 : matchMap[matches]++
    if (!duplicateCount[current]) duplicateCount[current] = occurances
    if (!matchCount[current]) matchCount[current] = matches
  }
  console.log(matchMap, duplicateCount, matchCount)
  for (const key in matchMap) {
    if (key === "0" || (key === "1" && matchMap[key] > 2)) return false
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

function difference(string1, string2) {
  let diff = 0;
  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) diff++;
  }
  return diff === 1;
}


/* Other Solutions

function stringsRearrangement(a) {
  for (let i = 0; i < a.length; i++) {
    let remaining = findNext(a[i], a);
    if (remaining.length === 0) return true;
  }
  return false;
}

function findNext(current, a) {
  if (a.length === 0) return a;
  for (let i = 0; i < a.length; i++) {
    if (differsByOneChar(current, a[i])) {
      let remaining = findNext(a[i], a.slice(0, i).concat(a.slice(i+1)));
      if (remaining.length === 0) return remaining;
    }
  }
  return a;
}

function differsByOneChar(s1, s2) {
  let mismatches = 0;
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) mismatches++;
    if (mismatches > 1) break;
  }
  return mismatches === 1;
}

*/
