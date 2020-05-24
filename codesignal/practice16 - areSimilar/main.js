function areSimilar(a, b) {
  let aDiff = []
  let bDiff = []

  for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
          aDiff.push(a[i])
          bDiff.push(b[i])
      }
  }

  if (aDiff.length > 2) {
      return false
  }
  const reversedBDiff = bDiff.reverse()

  for (let i = 0; i < aDiff.length; i++) {
      if (aDiff[i] !== reversedBDiff[i]) {
          return false
      }
  }
  return true
}

/* other solutions

function areSimilar(a, b) {
    const ad = a.filter( (v,i) => v !== b[i])
    const bd = b.filter( (v,i) => v !== a[i])
    return ad.length == 0 || (ad.length == 2 && ad.join('') == bd.reverse().join(''))
}

function areSimilar(a, b) {
    sum = 0;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) sum++
    }
    a.sort();
    b.sort();

    return a.toString() == b.toString() && sum < 3}

function areSimilar(a, b) {
  let mismatches = 0
  for (let i = 0; i < a.length && mismatches < 3; i++) {
    if (a[i] !== b[i]) mismatches++
  }
  if (mismatches > 2) return false
  const prodA = a.reduce((prod, n) => prod * n)
  const prodB = b.reduce((prod, n) => prod * n)
  return prodA < Number.MAX_SAFE_INTEGER
    ? prodA === prodB
    : a.reduce((sum, n) => sum + n) === b.reduce((sum, n) => sum + n)
}

*/
