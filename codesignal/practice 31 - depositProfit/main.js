function depositProfit(deposit, rate, threshold) {
  let years = 0
  while (deposit < threshold) {
      let interest = deposit * (rate/100)
      deposit += interest
      years++
  }
  return years
}
