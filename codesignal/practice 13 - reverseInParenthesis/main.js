function reverseInParentheses(inputString) {
  if (inputString.includes('(')) {
      return reverseInParentheses(reverseWord(inputString))
  }
  return inputString
}

function reverseWord(str) {
  const regex = /\(([^()]*)\)/i
  const word = regex.exec(str)[1];
  const reveredWord = word.split('').reverse().join('')
  return str.replace(regex, reveredWord)
}


/* other solutions:

GRANT:

function reverseInParentheses(inputString) {
    let reversedInParentheses = '';
    let stack = [];
    for(let i = 0; i < inputString.length; i++) {
        const char = inputString.charAt(i);
        if(stack.length) {
            if(char === ')') {
                let reversed = [];
                while(stack[stack.length - 1] !== '(') {
                    reversed.push(stack.pop());
                }
                stack.pop();
                stack = stack.concat(reversed);
                if(!stack.includes('(')) {
                    while(stack.length) reversedInParentheses += stack.shift();
                }
            } else {
                stack.push(char);
            }
        } else {
            if(char === '(') {
                stack.push(char);
            } else {
                reversedInParentheses += char;
            }
        }
    }
    return reversedInParentheses;
}

function reverseInParentheses(inputString) {
    while (inputString.includes('(')) {
        inputString = inputString.replace(/\(([^()]*)\)/, (_, str) => [...str].reverse().join(''));
    }
    return inputString;
}

*/
