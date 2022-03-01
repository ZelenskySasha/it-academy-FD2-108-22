function IsAPalindrome(str) {

    for (let i = 0; i <= str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}
console.log(IsAPalindrome("anna"));
console.log(IsAPalindrome("walter"));
console.log(IsAPalindrome("12321"));
console.log(IsAPalindrome("123456"));