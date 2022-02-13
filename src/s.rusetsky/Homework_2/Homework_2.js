function solution(str) {
  let reverseString = '';

  for (let character of str) {
    reverseString = character + reverseString;
  }

  return reverseString;
}

function repeatStr(n, s) {
  let repeatString = '';
  while (n > 0) {
    repeatString += s;
    n--;
  }
  return repeatString;
}

function highAndLow(numbers) {
  const arr = numbers.split(' ');
  let max = arr[0];
  let min = arr[0];

  for (let character of arr) {
    if (Number(character) < min) {
      min = character;
    }
    if (Number(character) > max) {
      max = character;
    }
  }
  return max + ' ' + min;
}

function isIsogram(str) {
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

function accum(s) {
  const result = [];
  const lowerStr = s.toLowerCase();

  for (let i = 0; i < lowerStr.length; i++) {
    let str = lowerStr[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      str += lowerStr[i];
    }
    result.push(str);
  }
  return result.join('-');
}

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

function stringToArray(string) {
  let arr = string.split(' ');
  return arr;
}

function countPositivesSumNegatives(input) {
  let positiveCount = 0;
  let negativeSum = 0;

  if (input === null || input.length === 0) {
    return [];
  }

  for (let num = 0; num < input.length; num++) {
    if (input[num] > 0) {
      positiveCount++;
    } else {
      negativeSum += input[num];
    }
  }
  return [positiveCount, negativeSum];
}

function squareSum(numbers) {
  let sumSquares = 0;

  for (let num = 0; num < numbers.length; num++) {
    sumSquares += numbers[num] * numbers[num];
  }
  return sumSquares;
}

function digitize(n) {
  let array = [];
  n = String(n);
  for (let i = n.length - 1; i >= 0; i--) {
    array.push(Number(n[i]));
  }
  return array;
}
