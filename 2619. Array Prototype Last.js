/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1
}

const arr = [1, 2, 3]
const arr2 = []
console.log(arr.last()) // 3
console.log(arr2.last()) // -1
