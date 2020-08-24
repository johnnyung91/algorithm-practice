const reverseInteger = x => {
    const isNegative = x < 0
    const limit = Math.pow(2,31)
    let string = Math.abs(x).toString().split('').reverse().join('')
    let num = Number(string)
    if (isNegative) num *= -1
    return (num > limit || num < -limit) ? 0 : num
};
