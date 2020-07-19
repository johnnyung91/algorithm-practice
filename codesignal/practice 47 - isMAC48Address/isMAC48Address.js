function isMAC48Address(inputString) {
  const macArray = inputString.split('-')
  if (macArray.length !== 6) return false
  return macArray.every(ele => /^[ABCDEF0-9]{2}$/.test(ele))
}
