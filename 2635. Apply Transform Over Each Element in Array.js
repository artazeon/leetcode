/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  const transformArr = []

  for (let i = 0; i < arr.length; i++) {
    transformArr.push(fn(arr[i], i))
  }

  return transformArr
}

console.log(
  map([1, 2, 3], function plusone(n) {
    return n + 1
  })
)
console.log(
  map([1, 2, 3], function plusI(n, i) {
    return n + i
  })
)
console.log(
  map([1, 2, 3], function constant(n, i) {
    return 42
  })
)
