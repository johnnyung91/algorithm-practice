function minesweeper(matrix) {
  let minesweeper = [];
  for (let r = 0; r < matrix.length; r++) {
    let newLine = [];
    for (let c = 0; c < matrix[r].length; c++) {
      let sum = 0;
      //left check
      if (matrix[r][c - 1]) {
        sum++;
      }
      //right check
      if (matrix[r][c + 1]) {
        sum++;
      }
      //above checks
      if (matrix[r - 1]) {
        if (matrix[r - 1][c]) sum++;
        if (matrix[r - 1][c - 1]) sum++;
        if (matrix[r - 1][c + 1]) sum++;
      }
      //below checks
      if (matrix[r + 1]) {
        if (matrix[r + 1][c]) sum++;
        if (matrix[r + 1][c - 1]) sum++;
        if (matrix[r + 1][c + 1]) sum++;
      }
      newLine.push(sum);
    }
    minesweeper.push(newLine);
  }
  return minesweeper;
}

/* Other solutions
  /**
   * The simplest way to accomplish this task is to manually check each direction for every element in the matrix.
   * We can create a `directions` array to shorten the code for doing so, having it represent the x and y deltas.
   *
   * Aside from that, it's rather self-explanatory.


  const directions = [
    [ 1,-1], [ 1, 0], [ 1, 1],
    [ 0,-1],          [ 0, 1],
    [-1,-1], [-1, 0], [-1, 1]
  ];

  minesweeper = matrix => matrix.map((row, y) => row.map((col, x) => directions.reduce((count, i) => count += !!(matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]), 0)));

function minesweeper(matrix) {
  const mineMap = [];
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  for(let row = 0; row < matrix.length; row++) {
      mineMap.push(new Array(matrix[row].length));
      for(let col = 0; col < matrix[0].length; col++) {
        let count = 0;
        for (const direction of directions) {
            const [rd, cd] = direction;
            if (matrix[row + rd] && matrix[row + rd][col + cd]) count++;
        }
        mineMap[row][col] = count;
      }
  }
  return mineMap;
}


*/
