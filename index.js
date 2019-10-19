const isNumber = (element) => {
  if (element !== null) {
    if (isNaN(element)) {
    } else {
      let elementNumber = parseInt(element)
      if (isFinite(elementNumber)) {
        return true
      }
    }
  }
}

const countSum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (isNumber(arr[i])) {
      sum = sum + arr[i]
    }
  }
  return sum
}

const countMin = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (isNumber(arr[i])) {
      var min = arr[i]
      break
    } else {
      min = arr[i + 1]
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (isNumber(arr[i])) {
      if (min > arr[i]) {
        min = arr[i]
      }
    }
  }
  return min
}

const countMax = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (isNumber(arr[i])) {
      var max = arr[i]
      break
    } else {
      max = arr[i + 1]
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (isNumber(arr[i])) {
      if (max < arr[i]) {
        max = arr[i]
      }
    }
  }
  return max
}

let someArr = [NaN, NaN,'', undefined, 0, 19, -2, '3gh', 52, Infinity, null, '', '    ', 'l3']
let resultSum = countSum(someArr)
let resultMax = countMax(someArr)
let resultMin = countMin(someArr)

console.log('sum = ', resultSum)
console.log('max = ', resultMax)
console.log('min = ', resultMin)
