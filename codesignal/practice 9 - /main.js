function allLongestStrings(inputArray) {
    let length = 0;
    let results = []
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > length) {
            length = inputArray[i].length;
        }
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === length) {
            results.push(inputArray[i])
        }
    }
    return results;
}

//TIM DAVIS ANSWER
function allLongestStrings(inputArray) {
    const maxLength = inputArray.reduce((max, { length }) =>
      Math.max(max, length)
    , 0)
    return inputArray.filter(({ length }) => length === maxLength)
  }

//GRANT ANSWER
function allLongestStrings(inputArray) {
    inputArray.sort((str1,str2) => str1.length <= str2.length ? 1 : -1);
    const longestLength = inputArray[0].length;
    const longestStrings = [];
    for(const string of inputArray) {
        if(string.length === longestLength) {
            longestStrings.push(string);
        }
    }
    return longestStrings;
}
