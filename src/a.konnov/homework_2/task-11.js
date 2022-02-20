function isPalindrome(line) {
    line = String(line);
    let index = Math.floor(line.length / 2);
    if (line.length === 1 || line.slice(0, index).split("").reverse().join("") === line.slice(-index)) {   
        return true;
    } else {
        return false;
    }
    return undefined;
  }
console.log(isPalindrome("anna"));   // true
console.log(isPalindrome("walter")); // false
console.log(isPalindrome(12321));    // true
console.log(isPalindrome(123456));   // false
console.log(isPalindrome('.'));
console.log(isPalindrome('.!!.'));