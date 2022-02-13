/* ============== Reversed Strings ============== */

function reverseStr2(str) {
  let array = str.split('');
    array.reverse();
  
    return `${array.join('')}`;
  }





/* ============== String Repeat ============== */

function repeatStr(count, str) {
  let string = '';
  for (let i = count; i > 0; i--) {
    string += str;
  }
  
  return `${string}`;
  
}




/* ============== Highest and Lowest ============== */

function highAndLow(strOfnumbers) {
  let array = strOfnumbers.split(' ');

  for (let i = 0; i < array.length; i++) {
    array[i] = parseInt(array[i]);
  }

  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length-1; i++) {
    
    if ((i+1 !== array.length) && max <= array[i+1] ) {
      max = array[i+1];
    }

    if ((i+1 !== array.length) && min >= array[i+1]) {
      min = array[i+1];
    }
  }
  return `${max} ${min}`;
}




/* ============== Isograms ============== */

function isIsogram(str) {
  let result = true;
  let string = str.toLowerCase();

  for (let i = 0; i < string.length - 1; i++) {
   let temp = string.indexOf(string[i], i+1);
   if (temp !== -1 ) {
     result = false;
     break;
   }
  }
  return result;
}




/* ============== Mumbling ============== */

function accum(s) {
  let newStr = s.toUpperCase().split('');
  let resultString = '';

  for (let i = 0; i < newStr.length; i++) {
    if (i === 0) {
      resultString += newStr[i];
    }
    else {
      resultString += '-' + newStr[i] + newStr[i].toLowerCase().repeat(i);
    }
  }
  return `${resultString}`;
}




/* ============== Count by X ============== */

function countBy (x, n) {
  let z = [];

  for (; n !== 0; n--) {
    z.unshift(x * n)
  }
  
  return z;
}





/* ============== Convert a string to an array ============== */

function stringToArray (string) {
  return string.split(' ');
}





/* ============== Count of positives / sum of negatives ============== */

function countPositivesSumNegatives(input) {
  let result = [];

  if (input === null || input === undefined || input.length === 0) {
    return result;
  }
  else {
    let negativeSum;

    let positive = input.filter((currentValue, index, array) => {return currentValue > 0});

    let negative = input.filter((currentValue, index, array) => {return currentValue < 0});

    negative.reduce((previuosValue, currentValue, index, array) => {return negativeSum = previuosValue + currentValue}, 0);

    result[0] = positive.length;
    result[1] = negativeSum;

    if (result[1] === undefined) { result[1] = 0};

    return result;
  }

}




/* ============== Square(n) Sum ============== */

function squareSum (numbers) {
  let temp = numbers;
  let temp2 = temp.map((value) => {return Math.pow(value, 2)});
  let result = temp2.reduce((previousValue, currentValue) => {return previousValue + currentValue}, 0);

  return result;
}





/* ============== Convert number to reversed array of digits ============== */

function digitize(n) {
  let result = n.toString();
  let result2 = result.split('').reverse();
  let result3 = result2.map((value) => {return parseInt(value)});
  return result3;
}

