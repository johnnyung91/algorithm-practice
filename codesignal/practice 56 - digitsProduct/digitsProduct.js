function digitsProduct(product) {
  if (product === 0) return 10;
  if (product === 1) return 1;

  let result = []

  for (let i = 9; i > 1; i--) {
      while (product % i === 0) {
          result.unshift(i)
          product /= i
      }
  }
  return product > 1 ? -1 : parseInt(result.join(''))
}
