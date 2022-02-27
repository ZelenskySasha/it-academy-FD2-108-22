//Palindrome Strings
function isPalindrome(line) {
  return line.toString().split('').reverse().join('') === line;
}

//+1 Array
function upArray(arr){
  return (!arr.some(item=>item<0))?
    (parseInt(arr.join('')) + 1).toString().split('').map(Number) : null;
}

//Pyramid Array
function pyramid(n) {
  let res = [];
  for(let i = 1; i <= n; i++){
    res.push(new Array(i).fill(1));
  }
  return res;
}

//Flatten
var flatten = function (array){
  return [].concat(...array);
}

//Largest pair sum in array
function largestPairSum (numbers) {
  const max = Math.max(...numbers);
  let indexMax = numbers.indexOf(Math.max(...numbers));
  numbers.splice(indexMax, 1);
  return max + Math.max(...numbers);
}