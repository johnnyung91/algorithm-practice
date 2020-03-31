function adjacentElementsProduct(inputArray) {
    let product = inputArray[0] * inputArray[1];
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (product < inputArray[i] * inputArray[i+1]) {
            product = inputArray[i] * inputArray[i+1]
        }
    }
    return product;
}

// function adjacentElementsProduct(inputArray) {
//     var prod = inputArray[0] * inputArray[1];

//     for (var i = 1; i<inputArray.length - 1;i++) {
//         prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
//     }

//     return prod
// }
