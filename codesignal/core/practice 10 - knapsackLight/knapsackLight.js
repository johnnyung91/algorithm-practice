function knapsackLight(value1, weight1, value2, weight2, maxW) {
  const totalWeight = weight1 + weight2
  const validValues = []

  if (maxW >= totalWeight) return value1 + value2
  if (maxW >= weight1 && maxW >= weight2 && maxW < totalWeight) return Math.max(value1, value2)
  if (maxW >= weight1) validValues.push(value1)
  if (maxW >= weight2) validValues.push(value2)
  return validValues.length ? Math.max(validValues) : 0
}
