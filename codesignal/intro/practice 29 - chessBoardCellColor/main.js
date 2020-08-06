function chessBoardCellColor(cell1, cell2) {
  const letters = {
      A: 1,
      B: 2,
      C: 1,
      D: 2,
      E: 1,
      F: 2,
      G: 1,
      H: 2
  }
  const c1Sum = letters[cell1[0]] + Number(cell1[1])
  const c2Sum = letters[cell2[0]] + Number(cell2[1])

  return c1Sum % 2 === c2Sum % 2
}

/* Other Solutions

function chessBoardCellColor(cell1, cell2) {
  return cell1.charCodeAt(0) % 2 === cell2.charCodeAt(0) % 2
    ? cell1[1] % 2 === cell2[1] % 2
    : cell1[1] % 2 !== cell2[1] % 2
}


*/
