function matrixElementsSum(matrix) {
    let total = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++)
            if (matrix[row][col]) {
                total += matrix[row][col];
            } else {
                if (matrix[row+1]) {
                    matrix[row+1][col] = 0;
                }
            }
        }
    return total;
    }
