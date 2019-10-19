let isNumber = (element) => {
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

let countSum = (arr) => {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (isNumber(arr[i])) {
      sum = sum + arr[i]
    }
  }
  return sum
}

let countMin = (arr) => {
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

let countMax = (arr) => {
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
