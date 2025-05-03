var TimeLimitedCache = function () {
  this.cache = new Map()
}

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  const existed = this.cache.has(key)

  if (existed) {
    clearTimeout(this.cache.get(key).timer)
  }

  const timerId = setTimeout(() => {
    this.cache.delete(key)
  }, duration)

  this.cache.set(key, { val: value, timer: timerId })

  return existed
}

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  return this.cache.get(key) ? this.cache.get(key).val : -1
}

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return this.cache.size
}

const timeLimitedCache = new TimeLimitedCache()
console.log(timeLimitedCache.set(1, 42, 1000)) // false
console.log(timeLimitedCache.get(1)) // 42
console.log(timeLimitedCache.count()) // 1
