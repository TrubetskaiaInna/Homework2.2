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
