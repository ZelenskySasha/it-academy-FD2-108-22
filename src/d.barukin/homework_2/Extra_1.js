function isPalindrome(line) {
    let str = line.toString();  
    return str == str.split('').reverse().join('');
}