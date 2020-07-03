function stringsRearrangement(inputArray) {
  let endings = 0
  for (let i = 0; i < inputArray.length; i++) {
      let matches = 0
      const current = inputArray[i]
      for (let j = 0; j < inputArray.length; j++) {
          const compare = inputArray[j]
          if (difference(current, compare)) matches++
      }
      if (matches === 1) endings++
      if (matches === 0 || endings > 2) return false
      console.log(current, matches, endings)
  }
  return true
}

function difference(string1, string2) {
  let diff = 0
  for (let i = 0; i < string1.length; i++) {
      if (string1[i] !== string2[i]) diff++
  }
  return diff !== 1 ? false : true
}
