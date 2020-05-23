function sortByHeight(a) {
  const people = a.filter(index => index >= 0)
  people.sort((a,b) => {return a-b})
  for (let i = 0; i < a.length; i++) {
      if (a[i] >= 0) {
          a[i] = people.shift()
      }
  }
  return a;
}

/* other solutions
function sortByHeight(a) {
  const people = a.filter(x => x >= 0).sort((a, b) => a - b)
  return a.map(value => value < 0 ? -1 : people.shift())
}
*/
