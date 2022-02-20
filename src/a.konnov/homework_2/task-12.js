function getMiddle(string) {
    let middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
      return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return string.charAt(middleIndex);
    }
  }
    

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));