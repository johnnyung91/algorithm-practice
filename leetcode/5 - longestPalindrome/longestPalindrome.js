const longestPalindrome = string => {
    let output = '';

    const findPalindrome = (index, isOdd = false) => {
        let first = index;
        let second = isOdd ? index : index + 1
        while (string[first] !== undefined
              && string[second] !== undefined
              && string[first] === string[second]
        ) {
            first--;
            second++
        }
        return string.slice(first + 1, second)
    }

    for (let i = 0; i < string.length; i++) {
        const oddSubstring = findPalindrome(i, true)
        const evenSubstring = findPalindrome(i)
        if (evenSubstring.length > oddSubstring.length) {
            if (evenSubstring.length > output.length) output = evenSubstring
        } else {
            if (oddSubstring.length > output.length) output = oddSubstring
        }
    }
    return output
};

longestPalindrome('xabba')
