/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

var compactObject = function (obj) {
  function handler(sub) {
    if (typeof sub === 'object' && sub !== null) {
      const preResult = Array.isArray(sub) ? [] : {}

      if (Array.isArray(sub)) {
        for (let el of sub) {
          const val = handler(el)
          if (val !== undefined) {
            preResult.push(val)
          }
        }

        if (preResult.length === 0) {
          return []
        }
      } else {
        for (let key in sub) {
          const val = handler(sub[key])
          if (val !== undefined) {
            preResult[key] = val
          }
        }
      }

      return preResult
    } else {
      return sub ? sub : undefined
    }
  }

  return handler(obj)
}

const obj1 = [null, 0, false, 1]
const obj2 = { a: null, b: [false, 1] }
const obj3 = [null, 0, 5, [0], [false, 16]]
const obj4 = { a: 0, b: 2 }

console.log(compactObject(obj1))
console.log(compactObject(obj2))
console.log(compactObject(obj3))
console.log(compactObject(obj4))
