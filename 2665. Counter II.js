/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let currentCount = init

  return {
    increment: () => ++currentCount,
    reset: () => (currentCount = init),
    decrement: () => --currentCount,
  }
}

const counter = createCounter(5)

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())
