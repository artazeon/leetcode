/**
 * @return {Function}
 */
var createHelloWorld = function () {
  return () => 'Hello World'
}

console.log(createHelloWorld([]))
