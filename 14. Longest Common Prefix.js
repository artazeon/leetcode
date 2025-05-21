/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  let result = ''
  const firstStr = strs[0]

  for (let i = 0; i < firstStr.length; i++) {
    const currentChar = firstStr[i]

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== currentChar) {
        return result
      }
    }

    result += currentChar
  }

  return result
}

strs = ['flower', 'flow', 'flight']
strs2 = ['dog', 'racecar', 'car']
strs3 = ['flower', 'flower', 'flower', 'flower']

console.log(longestCommonPrefix(strs))
console.log(longestCommonPrefix(strs2))
console.log(longestCommonPrefix(strs3))
