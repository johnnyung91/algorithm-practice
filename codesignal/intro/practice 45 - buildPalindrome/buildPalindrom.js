function buildPalindrome(st) {
  const isPalindrome = string => string === string.split('').reverse().join('')

  let suffix = ''
  for (const char of st) {
      if (isPalindrome(st + suffix)) break
      suffix = char + suffix
  }
  return st + suffix
}
