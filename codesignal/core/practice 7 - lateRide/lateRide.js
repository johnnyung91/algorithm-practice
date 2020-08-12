function lateRide(n) {
  const time = [0 , 0]
  while (n >= 60) {
      time[0]++
      n -= 60
  }
  time[1] = n
  return time.join('').split('').reduce((sum, digit) => sum + +digit, 0)
}
