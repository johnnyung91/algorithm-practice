function deleteDigit(n) {
  const digits = n.toString().split('')
  let max = 0
  for (let i = 0; i < digits.length; i++) {
      const copy = digits.slice()
      copy.splice(i, 1).join('')
      const number = Number(copy.join(''))
      if (max < number) max = number
  }
  return max
}


/* Other Solutions
function deleteDigit(n) {
  const digits = n.toString().split('')
  return Math.max(...digits.map((digit,index) => {

  }))
}
*/
