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
console.log(isPalindrome("anna"));
console.log(isPalindrome("walter"));
console.log(isPalindrome(12321));
console.log(isPalindrome(123456));
console.log(isPalindrome('.'));
console.log(isPalindrome('.!!.'));