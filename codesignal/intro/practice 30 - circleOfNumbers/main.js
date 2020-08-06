function circleOfNumbers(n, firstNumber) {
  return (n / 2 + firstNumber) % n
}


/* Other Solutions

function circleOfNumbers(n, firstNumber) {
  return firstNumber >= n / 2
    ? firstNumber - n / 2
    : firstNumber + n / 2
}

function circleOfNumbers(n, firstNumber) {
  const middle = (n / 2) - 1;
  if (firstNumber <= middle) {
    return ((n - 2) / 2) + firstNumber + 1;
  } else {
    return firstNumber - ((n - 2) / 2) - 1;
  }
}


*/
