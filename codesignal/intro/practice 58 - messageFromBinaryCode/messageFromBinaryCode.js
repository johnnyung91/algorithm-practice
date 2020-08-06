function messageFromBinaryCode(code) {
  const decoded = []
  const array = code.split('')
  while (array.length) {
      let binary = array.splice(0,8).join('')
      let char = parseInt(binary, 2)
      decoded.push(String.fromCharCode(char))
  }
  return decoded.join('')
}
