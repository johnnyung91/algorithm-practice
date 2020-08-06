function chessKnight(cell) {
  const letters = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8
  }
  let count = 0
  const checkMoves = number => {
      if (number - 1 > 0) count++
      if (number + 1 < 9) count++
  }

  const first = parseInt(letters[cell[0]])
  const second = parseInt(cell[1])

  // check top
  if (second + 2 <= 8) {
      checkMoves(first)
  }

  // check bottom
  if (second - 2 > 0) {
      checkMoves(first)
  }

  // check left
  if (first - 2 > 0) {
      checkMoves(second)
  }

  // check right
  if (first + 2 <= 8) {
      checkMoves(second)
  }

  return count
}
