function isPalindrome(line) {
    let array = String(line).split("").reverse().join("")
    if (array == line) {
        return true
    } else {
        return false
    }

}
console.log(isPalindrome("anna"));
console.log(isPalindrome("walter"));
console.log(isPalindrome(12321));