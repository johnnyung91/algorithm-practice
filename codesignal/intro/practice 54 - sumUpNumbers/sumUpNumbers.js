function sumUpNumbers(s) {
  const numbers = s.match(/([0-9]+)/g)
  return numbers ? numbers.reduce((sum,number) => sum + +number, 0) : 0
}
