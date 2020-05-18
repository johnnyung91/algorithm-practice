function isLucky(n) {
//turn n into a string - done
//divide the string into two equal parts (n.length/2) - done
//turn each half into an array (0 - n.length/2 -1) and (n.length/2 - n.length - 1) - done
//turn each 'string' back to a 'number' add the sums of each array and check to see if they are equal to each other
  let firstTotal = 0;
  let secondTotal = 0;
  const string = n.toString();
  const firstHalf = string.slice(0, string.length/2).split('')
  const secondHalf = string.slice(string.length/2 - string.length).split('')

  for (let i = 0; i < firstHalf.length; i++) {
    let number = Number(firstHalf[i])
    firstTotal = firstTotal + number
  }

  for (let j = 0; j < secondHalf.length; j++) {
    let number = Number(secondHalf[j])
    secondTotal = secondTotal + number
  }

  return firstTotal === secondTotal
}

/* other solutions

function isLucky(n) {
  const string = n.toString()
  let points = 0
  for (let i = 0; i < string.length; i++) {
    i < string.length / 2
      ? points += parseInt(string[i], 10)
      : points -= parseInt(string[i], 10)
  }
  return !points
}

function isLucky(n) {
    var count = 0;
    n = String(n).split('').map(t => {return parseInt(t)});
    n.forEach( (el, i) => { (i < n.length / 2) ? count += el : count -= el });
    return count == 0;
}

function isLucky(n) {
    var s = n.toString();
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < s.length/2; i++){
        sum1 += parseInt(s[i]);
        sum2 += parseInt(s[s.length-i-1]);
    }
    return sum1 == sum2;
}

*/
