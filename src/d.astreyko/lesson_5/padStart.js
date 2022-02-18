function padStart(initialStr, maxLength, fillChar) {
  if (initialStr.length < maxLength) {
    let fillCount = maxLength - initialStr.length;
    return fillChar.repeat(fillCount) + initialStr;
  } else {
    return initialStr;
  }
}

console.log(padStart('abcfg', 10, '$'));
console.log(padStart('abcfg', 4, '$'));
