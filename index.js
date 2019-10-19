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
