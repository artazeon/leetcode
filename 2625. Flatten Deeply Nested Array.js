var flat = function (arr, n) {
  const flattenArr = []

  function handler(subArr, depth) {
    for (const element of subArr) {
      if (Array.isArray(element) && depth < n) {
        handler(element, depth + 1)
      } else {
        flattenArr.push(element)
      }
    }
  }

  handler(arr, 0)

  return flattenArr
}

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
const n0 = 0
const n1 = 1
const n2 = 2

console.log(flat(arr, n0))
console.log(flat(arr, n1))
console.log(flat(arr, n2))
