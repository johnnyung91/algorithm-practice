const isPalindrome = x => {
    const string = x.toString()
    return string === string.split('').reverse().join('')
};

const isPalindrome2 = x => {
    if (x === 0) return true
    if (x < 0 || x % 10 === 0) return false

    let reverse = 0
    let original = x

    while (x > 0) {
        reverse = reverse * 10 + x % 10
        x = parseInt(x/10)
    }

    return original === reverse
}
