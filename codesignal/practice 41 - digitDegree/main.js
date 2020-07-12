function digitDegree(n) {
  let counter = 0
  while (n > 9) {
      n = n.toString()
          .split('')
          .reduce((sum, digit) => parseInt(sum) + parseInt(digit), 0)
      counter++
  }
  return counter
}
