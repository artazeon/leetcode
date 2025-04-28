/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

var addTwoPromises = function (promise1, promise2) {
  return Promise.all([promise1, promise2]).then((data) => data[0] + data[1])
}

// var addTwoPromises = async function (promise1, promise2) {
//   const result1 = await promise1
//   const result2 = await promise2
//   return result1 + result2
// }

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log) // 4
