function maxMultiple(divisor, bound) {
  for (let i = bound; i > 0; i--) {
      if (!(i % divisor)) return i
  }
}
