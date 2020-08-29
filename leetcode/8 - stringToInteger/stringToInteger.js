const myAtoi = function (str) {
  let i = 0;
  let sign = 1;
  let result = 0;
  let limit = Math.pow(2, 31);

  while (str[i] == " ") {
    i++;
  }

  if (str[i] === "+") {
    i++;
  } else if (str[i] === "-") {
    sign = -1;
    i++;
  }

  while (/[0-9]/g.test(str[i])) {
    result = result * 10 + (str[i] - 0);
    if (result * sign >= limit) {
      return limit - 1;
    } else if (result * sign <= -limit) {
      return -limit;
    }
    i++;
  }

  return result * sign;
};
