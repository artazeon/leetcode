/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

var argumentsLength = (...args) => args.length

/**
 * argumentsLength(1, 2, 3); // 3
 */

console.log(argumentsLength(5))
console.log(argumentsLength({}, null, '3'))
