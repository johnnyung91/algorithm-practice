function absoluteValuesSumMinimization(a) {
  return a.length % 2 === 0 ? a[a.length/2 - 1] : a[Math.floor(a.length/2)]
}

function absoluteValuesSumMinimization2(a) {
  let smallestTotal = null;
  let smallestNum = a[0];

  for (let i = 0; i < a.length; i++) {
      let total = 0;
      for (let j = 0; j < a.length; j++) {
        total += Math.abs(a[j] - a[i])
      }
      if (i === 0) {
        smallestTotal = total;
      } else if (Math.abs(total) < smallestTotal) {
        smallestTotal = total
        smallestNum = a[i]
      }
  }
  return smallestNum
}


/* Other Solutions

function absoluteValuesSumMinimization(a) {
  const sums = a.map((int, index, ints) =>
    ints.reduce((sum, _int) => sum + Math.abs(_int - int), 0)
  )
  let [ minInt ] = a
  for (let i = 1; i < a.length; i++) {
    if (sums[i - 1] <= sums[i]) continue
    minInt = a[i]
  }
  return minInt
}

*/
