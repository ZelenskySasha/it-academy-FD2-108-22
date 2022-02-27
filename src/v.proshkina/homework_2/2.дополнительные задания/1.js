function checkPalindrome(line) {
  const string = String(line);
  if (string.length % 2 === 0) {
    let firstPart = string.slice(0, string.length / 2);
    let secondPart = string.slice(-string.length / 2);
    console.log(firstPart);
    console.log(secondPart);
    if (firstPart === secondPart.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }

  if (string.length % 2 !== 0) {
    let firstPart = string.slice(0, string.length / 2 + 1);
    let secondPart = string.slice(-(string.length / 2 + 1));
    console.log(firstPart);
    console.log(secondPart);
    if (firstPart === secondPart.split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(checkPalindrome("I anna I"));
console.log(checkPalindrome("walter"));
console.log(checkPalindrome(12321));
console.log(checkPalindrome(123456));
console.log(checkPalindrome("."));
