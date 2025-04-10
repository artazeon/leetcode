/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let accum = init

  for (let i = 0; i < nums.length; i++) {
    accum = fn(accum, nums[i])
  }

  return accum
}

console.log(
  reduce(
    [1, 2, 3, 4],
    function sum(accumum, curr) {
      return accumum + curr
    },
    0
  )
)
