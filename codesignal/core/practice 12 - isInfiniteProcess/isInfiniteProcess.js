function isInfiniteProcess(a, b) {
  if (a > b) return true
  if (Math.abs(a+b) % 2 === 0) return false
  return true
}
