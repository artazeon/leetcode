/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
  let obj = {}

  for (let i = 0; i < this.length; i++) {
    const key = fn(this[i])

    if (!obj[key]) {
      obj[key] = []
    }
    obj[key].push(this[i])
  }
  return obj
}

console.log([(1, 2, 3)].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}
console.log(
  [{ id: '1' }, { id: '1' }, { id: '2' }].groupBy(function (item) {
    return item.id
  })
)
