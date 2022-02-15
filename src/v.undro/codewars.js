// 1.String

function solution(str) {
    return str.split('').reverse().join('');
}

// solution(`reverse`);

function repeatStr (n, s) {
    return s.repeat(n);
  } 

//   repeatStr(5, "Hello");

  
  function highAndLow(numbers){

    let deleteSpice = numbers.split(' ', numbers.length);
    let arr = deleteSpice.map(item => Number(item));
    let min = arr.sort((a,b) => a - b)[0] + '';
    let max = arr.sort((a,b) => a - b)[arr.length - 1] + '';

    return `${max} ${min}`;

  }

//   highAndLow("1 9 3 4 -5");

function isIsogram(str){
    str = str.toLowerCase().split('');
    let uniaue = new Set(str);

    if (str.length == uniaue.size) {
        return true;
    } else {
        return false;
    }
  }

//   isIsogram("Dermatoglyphics")

function accum(s) {
	s = s.split('').map((item, index) => item.repeat(index +1))
    .map(item => item.toLowerCase());
    let result = s.map(item => item[0]
        .toUpperCase() + item.slice(1))
        .join('-');

    return result;

}

// accum("cwAt");

// 2.Array

function countBy(x, n) {
    let z = [];

    let maxValue = x * n;

    for (let i = 1; i <= maxValue; i++) {
        if (i % x == 0) {
            z.push(i)
        }
    }
    return z;
  }

  countBy(1,10);


  function stringToArray(string){

    return string.split(' ');

}

// stringToArray("I love arrays they are my favorite")


function countPositivesSumNegatives(input) {

    let countPositive = 0;
    let sumNegative = 0;
    if (input === null || input.length === 0) {
      return [];
    } else {
      input.forEach((num) => {
          if (num > 0) {
            countPositive++;
          } else {
            sumNegative += num
          }
         
      });
    }
    return [countPositive , sumNegative];


}

// countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])

function squareSum(numbers){
    let sum = 0;
    let squares = numbers.map(item => item*item);
    squares.forEach(item => {
        sum += item;
    })

    return sum;
  }

//   squareSum([1, 2, 3, 4, 5])

function digitize(n) {
    return String(n).split('').reverse().map(item => Number(item));
  }

//   digitize(348597)





