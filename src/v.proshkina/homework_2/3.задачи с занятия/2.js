function getMiddle(string) {
  if (string.length % 2 === 0) {
    return string.substr(string.length / 2 - 1, 2);
  }
  if (string.length % 2 !== 0) {
    return string.substr(string.length / 2, 1);
  }
}

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
