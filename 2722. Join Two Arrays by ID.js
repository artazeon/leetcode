var join = function (arr1, arr2) {
  const joinedObj = {}

  for (let obj of arr1) {
    joinedObj[obj.id] = obj
  }

  for (let obj of arr2) {
    if (joinedObj[obj.id]) {
      joinedObj[obj.id] = { ...joinedObj[obj.id], ...obj }
    } else {
      joinedObj[obj.id] = obj
    }
  }

  const joinedArray = Object.values(joinedObj)

  return joinedArray
}

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
]
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
]

console.log(join(arr1, arr2))
