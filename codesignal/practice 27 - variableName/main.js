function variableName(name) {
  const lowercase = name.toLowerCase();
  const letters = 'abcdefghijklmnopqrstuvwxyz_'
  const numbers = '0123456789'

  if (numbers.includes(lowercase[0])) return false

  for (let i = 0; i < lowercase.length; i++ ) {
      const current = lowercase[i]
      if (!letters.includes(current) && !numbers.includes(current)) return false
  }
  return true
}


/* Other solutions

function variableName(name) {
  return /^[a-z_](\w+)?$/i.test(name)
}

function variableName(name) {
    if(name.charAt(0) >= '0' && name.charAt(0) <= '9') return false;
    return name.split('')
        .filter(letter => letter !== '_')
        .filter(letter => letter.toLowerCase() < 'a' || letter.toLowerCase() > 'z')
        .filter(letter => letter < '0' || letter > '9')
        .length === 0;
}



*/
