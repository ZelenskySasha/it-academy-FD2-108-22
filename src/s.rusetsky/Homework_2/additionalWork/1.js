function isPalindrome(line) {
  let string = String(line);
  halfLength = string.length/2;
  halfLength = Math.floor(halfLength);
  let str1 = '';
  let str2 = '';

  str1 = string.slice(-halfLength);
  str2 = string.slice(0, halfLength);
  
  str1 = str1.split('').reverse().join('');
  
  if (str1 === str2 || string.length === 1) {
    return true;
  } else {
    return false;
  } 
}