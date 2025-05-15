var promiseAll = function (functions) {
  const promise = new Promise((resolve, reject) => {
    if (functions.length === 0) {
      return resolve([])
    }

    const results = new Array(functions.length)
    let count = functions.length
    let completed = 0
    let hasRejected = false

    for (let i = 0; i < count; i++) {
      const currentPromise = functions[i]()
      currentPromise
        .then((value) => {
          if (hasRejected) return
          results[i] = value
          completed++
          if (completed === count) {
            resolve(results)
          }
        })
        .catch((error) => {
          if (hasRejected) return
          hasRejected = true
          reject(error)
        })
    }
  })

  return promise
}

const promise = promiseAll([() => new Promise((res) => res(42))])
promise.then(console.log) // [42]
