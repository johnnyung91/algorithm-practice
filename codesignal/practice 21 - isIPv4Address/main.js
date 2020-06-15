function isIPv4Address(inputString) {
  /* ipv4 cases
  4 integers separated with a . (array length === 4)
  each number must be from 0-255
  numbers cannot contain leading 0's (unless single 0)
  */
  const ipArray = inputString.split(".");

  if (ipArray.length !== 4) return false;

  for (let i = 0; i < ipArray.length; i++) {
    const string = ipArray[i];
    if (!string) return false;
    if (string.length > 1 && string.charAt(0) === "0") return false;

    const number = Number(string);
    if (number < 0 || number > 255 || isNaN(number)) return false;
  }
  return true;
}
