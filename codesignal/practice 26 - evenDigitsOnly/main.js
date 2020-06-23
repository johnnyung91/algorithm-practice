function evenDigitsOnly(n) {
  const array = n.toString().split('')
  return array.every(element => element % 2 === 0)
}

/* Other solutions

function evenDigitsOnly(n) {
    while(n > 0) {
        if(n % 2 !== 0) return false;
        n = Math.floor(n / 10);
    }
    return true;
}

*/
