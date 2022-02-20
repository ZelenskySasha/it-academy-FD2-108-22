function getMiddle(string) {
    let middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
      return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
      return string.charAt(middleIndex);
    }
  }
    

console.log(getMiddle("test")); // should return "es"
console.log(getMiddle("testing")); // should return "t"
console.log(getMiddle("middle")); // should return "dd"
console.log(getMiddle("A")); // should return "A"