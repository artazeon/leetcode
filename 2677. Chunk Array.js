/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function (arr, size) {
  const res = []

  while (arr.length > 0) {
    res.push(arr.splice(0, size))
  }

  return res
}

console.log(chunk([1, 2, 3, 4, 5], 1))
console.log(chunk([1, 9, 6, 3, 2], 3))
console.log(chunk([8, 5, 3, 2, 6], 6))
console.log(chunk([], 1))
