

function checkBrackets(checkString) {
  let chars = checkString.split('')
  let stack = []

  for (let i = 0; i < chars.length; i++) {
    let char = chars[i];
    if ('([{'.includes(char)) {
      stack.push(char);
    }
    if (char === ')') {
      if (stack.pop() != '(') {
        return false;
      }
    }
    if (char === ']') {
      if (stack.pop() !== '[') {
        return false;
      }
    }
    if (char === '}') {
      if (stack.pop() !== '{') {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }

}

console.log(checkBrackets("()"))
console.log(checkBrackets("([])"))
console.log(checkBrackets(")("))
console.log(checkBrackets("(()"))
console.log(checkBrackets("(())("))