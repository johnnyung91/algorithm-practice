function boxBlur(image) {
  let blurredImage = [];

  for (let row = 0; row < image.length - 2; row++) {
      let newLine = [];
      for (let column = 0; column < image[row].length - 2; column++) {
          let sum = 0;
          for (let x = row; x < row + 3; x++) {
              for (let y = column; y < column + 3; y++) {
                  sum += image[x][y]
              }
          }
          newLine.push(Math.floor(sum/9))
      }
      blurredImage.push(newLine)
  }
  return blurredImage;
}

/* Other solutions

function boxBlur(image) {
  const blurred = []
  for (let i = 1; i < image.length - 1; i++) {
    blurred[i - 1] = []
    for (let j = 1; j < image[i].length - 1; j++) {
      blurred[i - 1][j - 1] = average(
        image[i - 1][j - 1], image[i - 1][j], image[i - 1][j + 1],
        image[i][j - 1],     image[i][j],     image[i][j + 1],
        image[i + 1][j - 1], image[i + 1][j], image[i + 1][j + 1]
      )
    }
  }
  return blurred
}
function average(...values) {
  return values.reduce((sum, value) => sum + value) / values.length | 0
}


function boxBlur(image) {
    const arr = [];
    const directions = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,0],[0,1],[1,-1],[1,0],[1,1]];
    for(let row = 1; row < image.length - 1; row++) {
        const toBeAdded = [];
        for(let col = 1; col < image[0].length - 1; col++) {
            let pixelSum = 0;
            for(const direction of directions) {
                const [rd,cd] = direction;
                pixelSum += image[row+rd][col+cd];
            }
            toBeAdded.push(Math.floor(pixelSum / 9));
        }
        arr.push(toBeAdded);
    }
    return arr;
}

boxBlur = I => {
    //Slice off the border
    var B = I.slice(1,-1).map(e=>e.slice(1,-1))

    //Replace every element with the average
    // of its neighbors
    return B.map((row,i) =>
        row.map((elem,j) => {
            var sum = 0
            for(var x=0;x<3;++x)
                for(var y=0;y<3;++y)
                    sum += I[i+x][j+y]
            return sum/9|0
        })
    )
}

*/
