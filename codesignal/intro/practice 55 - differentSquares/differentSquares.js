function differentSquares(m) {
  const squares = {}
  for (let x = 0; x < m.length - 1; x++) {
      for (let y = 0; y < m[x].length - 1; y++) {
          const numbers = [m[x][y], m[x][y+1], m[x+1][y], m[x+1][y+1]].join('')
          !squares[numbers] ? squares[numbers] = 1 : squares[numbers]++
      }
  }
  return Object.keys(squares).length
}


/* Other solution

function differentSquares(m) {
    const squares = new Set
    for (let x = 0; x < m.length - 1; x++) {
        for (let y = 0; y < m[x].length - 1; y++) {
            const numbers = [m[x][y], m[x][y+1], m[x+1][y], m[x+1][y+1]].join('')
            squares.add(numbers)
        }
    }
    return squares.size
}

*/
