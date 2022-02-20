//Palindrome Strings

function isPalindrome(line) {
    if (line.toString() == line.toString().split('').reverse('').join('')) {
      return true;
    }
    else {
      return false;
    }
}

//+1 Array это не работает и неправильно, это то как бы мне хотелось сделать но не получается. Что делать,сенсей?

function upArray(arr) {
    if (arr.length === 0) return null;
    if (arr.some((el) => typeof el !== "number" || el < 0 || el > 9)) return null;
    
    let result = [Number(arr.toString) + 1];
   
    return result;
}


//Piramid

function pyramid(n) {
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result.push(new Array(i + 1).fill(1));
    }
  
    return result;
}

//Flaten

function flatten(array) {
    let result = [];
  
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result.push(...array[i]);
      } else {
        result.push(array[i]);}
    }
}

//Largest pair sum in array

function largestPairSum(numbers) {
    let maxNum1 = Math.max(...numbers);
    numbers.splice(numbers.indexOf(maxNum1), 1);
    let maxNum2 = Math.max(...numbers);
  
    return maxNum1 + maxNum2;
}