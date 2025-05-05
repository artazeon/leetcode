/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timerId = null

  return (...args) => {
    clearTimeout(timerId)
    timerId = setTimeout(() => {
      fn(...args)
    }, t)
  }
}

function test(...inputs) {
  console.log('Logged:', inputs)
}

const dlog = debounce(test, 100)

dlog('Первый')
setTimeout(() => dlog('Второй'), 50)
setTimeout(() => dlog('Третий'), 150)
