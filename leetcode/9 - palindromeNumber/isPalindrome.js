const isPalindrome = x => {
    const string = x.toString()
    return string === string.split('').reverse().join('')
};
