/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
  let state = init
  return {
    increment: () => ++state,
    decrement: () => --state,
    reset: () => (state = init),
  }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

const counter = createCounter(0)

console.log(counter.increment())
console.log(counter.increment())
// console.log(counter.decrement())
// console.log(counter.reset())
// console.log(counter.decrement())
