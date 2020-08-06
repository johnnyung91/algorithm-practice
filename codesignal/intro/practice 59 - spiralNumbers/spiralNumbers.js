function spiralNumbers(n) {
  let matrix = []
  for (let i = 0; i < n; i++) {
      let row = []
      for (let j = 0; j < n; j++) {
          row.push(0)
      }
      matrix.push(row)
  }
  let startRow = 0
  let endRow = n - 1
  let startCol = 0
  let endCol = n - 1
  let counter = 1

  while (startRow <= endRow && startCol <= endCol) {
      for (let y = startCol; y <= endCol; y++) {
          matrix[startRow][y] = counter;
          counter++;
      }
      startRow++;

      for (let x = startRow; x <= endRow; x++) {
          matrix[x][endCol] = counter;
          counter++;
      }
      endCol--;

      for (let y = endCol; y >= startCol; y--) {
          matrix[endRow][y] = counter;
          counter++;
      }
      endRow--;

      for (let x = endRow; x >= startRow; x--) {
          matrix[x][startCol] = counter;
          counter++;
      }
      startCol++;
  }

  return matrix
}
