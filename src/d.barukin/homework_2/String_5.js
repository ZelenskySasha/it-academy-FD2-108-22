function accum (letters) {
    let result = []
    let lowerStr = letters.toLowerCase()
    for (let i = 0; i < lowerStr.length; i++) {
      let string = lowerStr[i].toUpperCase()
      for (let k = 0; k < i; k++) {
        string += lowerStr[i]
      }
      result.push(string)
    }
    return result.join("-")
}

accum("RqaEzty")