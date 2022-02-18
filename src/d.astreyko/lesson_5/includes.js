function includes (string, subString) {
  for (let i=0; i<string.length; i++) {
    let potentialString = string.slice(i, i+subString.length)
    if (potentialString === subString) {
      return true
    }
  }
  return  false
}


console.log(includes('ddhkegi', 'ke'));
console.log(includes('ddhkegi', 'k2'));


