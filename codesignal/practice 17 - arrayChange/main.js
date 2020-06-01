function arrayChange(inputArray) {
  let counter = 0

  for (let i = 0; i < inputArray.length - 1; i++) {
      if (inputArray[i] >= inputArray[i + 1]) {
          const difference = inputArray[i] - inputArray[i + 1]
          const moves = difference + 1
          inputArray[i + 1] = inputArray[i + 1] + moves
          counter += moves
      }
  }
  return counter
}

/* OTHER SOLUTIONS

function arrayChange(inputArray) {
    return inputArray.reduce(function(x,b,i,a){
        while(b>=a[i+1]){x++;a[i+1]++;};
        return x;
    },0)
}

function arrayChange(inputArray) {
  return inputArray.reduce((moves, integer, index, input) => {
    if (!index || integer > input[index - 1]) return moves
    if (input[index] <= input[index - 1]) {
      moves += input[index - 1] - input[index] + 1
      input[index] += input[index - 1] - input[index] + 1
    }
    return moves
  }, 0)
}

function arrayChange(inputArray) {
    let count = 0;
    for(i = 1; i < inputArray.length; i++){
        if(inputArray[i] <= inputArray[i - 1]){
            while(inputArray[i] <= inputArray[i - 1]){
                inputArray[i]++;
                count++;
            }
        }
    }
    return count;
}

*/
