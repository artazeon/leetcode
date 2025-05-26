/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  const cache = new Map()

  return function (...args) {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)
    } else {
      const res = fn(...args)
      cache.set(key, res)
      return res
    }
  }
}

let callCount = 0

const memoizedFn = memoize(function (a, b) {
  callCount += 1
  return a + b
})

console.log(memoizedFn(2, 3))
console.log(memoizedFn(2, 3))
console.log(memoizedFn(3, 3))
console.log(callCount)
