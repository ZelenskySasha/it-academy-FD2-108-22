function slice(string, startIndex, endIndex) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i >= startIndex && i < endIndex) {
      result += string[i];
    }
  }
  return result;
}

console.log(slice('Привет', 0, 3));

function slice2(string, startIndex, endIndex) {
  let result = '';
  for (let i = startIndex; i < endIndex; i++) {
    result += string[i];
  }
  return result;
}

console.log(slice2('Привет', 0, 3));
