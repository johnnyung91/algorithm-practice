function lineEncoding(s) {
  let result = ''
  let count = 1
  for (let i = 0; i < s.length; i++) {
      const current = s[i]
      if (current === s[i+1]) count++
      else {
          const substring = count === 1 ? s[i] : `${count}${s[i]}`
          result += substring
          count = 1
      }
  }
  return result
}

/* Other solutions

const lineEncoding = s => {
    return s.replace(/(.)\1+/g, chars => chars.length + chars[0]);
}

*/
