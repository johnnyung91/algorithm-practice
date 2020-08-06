function sudoku(grid) {
  const checkRowsCol = () => {
      for (let i = 0; i < 9; i++) {
        let row = new Set(grid[i])
        let column = new Set(grid.map(x => x[i]))
        if (row.size !== 9 || column.size !== 9) return false
      }
      return true
  }

  const checkSquare = () => {
      for (let i = 0; i < 9; i += 3) {
          for (let j = 0; j < 9; j += 3) {
              const square = [
              grid[i][j], grid[i][j+1], grid[i][j+2],
              grid[i+1][j], grid[i+1][j+1], grid[i+1][j+2],
              grid[i+2][j], grid[i+2][j+1], grid[i+2][j+2]
              ]
              let s = new Set(square)
              if (s.size !== 9) return false
          }
      }
      return true
  }

  return checkRowsCol() && checkSquare()
}
