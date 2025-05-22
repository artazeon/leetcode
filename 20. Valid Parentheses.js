var isValid = function (s) {
  const arrStack = []
  const objPair = { '{': '}', '[': ']', '(': ')' }

  for (let i = 0; i < s.length; i++) {
    if (objPair[s[i]]) {
      arrStack.push(s[i])
    } else {
      const last = arrStack.pop()
      if (objPair[last] !== s[i]) {
        return false
      }
    }
  }

  return arrStack.length === 0
}

console.log(isValid('()'))
console.log(isValid('()[]{}'))
console.log(isValid('([])'))
console.log(isValid('[}'))
