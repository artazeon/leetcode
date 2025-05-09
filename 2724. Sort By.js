/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
  const sortedArr = arr.sort((a, b) => fn(a) - fn(b))
  return sortedArr
}

const arr = [5, 4, 1, 2, 3]
const fn = (x) => x

console.log(sortBy(arr, fn))
