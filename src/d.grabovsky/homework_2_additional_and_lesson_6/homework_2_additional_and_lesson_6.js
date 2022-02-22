// Доп. задачи
// =========== 1. Palindrome ===============

function isPalindrome(line) {
  let str1 = `${line}`;
  let str2 = str1.split('').reverse().join('');
  return str1 === str2;
}


// ============ 2. +1 Array ==================
function upArray(arr) {
  if (arr.length > 0) {
    
    let res = arr.every((value) => {return value >= 0});
    if (res === false) {
      return null;
    }
    else {
      let array = arr;
      let inputLength = array.length;
      let maxSafeInt = BigInt(Number.MAX_SAFE_INTEGER).toString();
      
      if(maxSafeInt.length <= inputLength) {
        array = String(BigInt(array.join('')) + 1n);
      }
      else {
        array = String(parseInt(array.join('')) + 1);
      }
      

      if (inputLength > array.length) {
        let str = "0";
        array = str.repeat(inputLength - array.length) + array;
      }

      
      array = array.split('');
      for (let i=0; i < array.length; i++) {
        array[i] = parseInt(array[i]);
      }

      console.log(array);
      return array;
    }
  }
  else {
    return null;
  }
}



// ======== 3. Pyramid Array  =========

function pyramid(n) {
  let t = n;
  let result = [];

  for (let i = 0; i < t; t--) {
    let tempArray = [];
    for (let j = t; 0 < j && j <= n; j++) {
      tempArray.push(1);
    }
    result.push(tempArray)
  }

  return result;
}



// ======== 4. Flatten  =========

let flatten = function (array) {
  return array.flat(Infinity);
}



// ======== 5. Largest pair sum in array  =========

function largestPairSum (numbers) {
  let array = numbers;

  array.sort((a,b) => b - a);
  array[0] + array[1]

  return array[0] + array[1];
}



// Задачи с урока
// ======== 1. Vowel Count =========

function getCount(str) {
  let vowelsCount = 0;
  
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let array = str.split('');
  array.forEach((arrayItem) => { vowels.forEach((vowelItem) => {if (vowelItem === arrayItem) {vowelsCount++}})})
  
  console.log(vowelsCount);
  return vowelsCount;
}


// ========== 2. Get the Middle Character ==================

function getMiddle(s) {
  let string = s;
  if (string.length % 2 === 0) {
    let startRange = Math.floor(string.length / 2) - 1;
    let finishRange = Math.floor(string.length / 2) + 1; 
    return string.slice(startRange, finishRange);
  }
  else {

    return string[Math.floor(string.length / 2)];
  }
}


// ========== 3. Combine objects ====================

function combine(objects) {
  let result = {};
  let tempArray = []

  for (let i=0; i < arguments.length; i++) {
    tempArray.push( arguments[i]);
  }

  function plusObjectItems(object) {
    for (let key in object) {
      if (key in result) {
        result[key] += object[key];
      }
      else {
        result[key] = object[key];
      }
    }
  }

  tempArray.forEach((tempArrayItem) => plusObjectItems(tempArrayItem) )

  return result;
}


// ========== 4. Отсортировать по возрасту пользователей ====================

function sortByAge(array) {
  let result = array;

  result.sort((a, b) => {return a.age - b.age});
  return result;
}


// ========== 5. Найти средний возраст пользователей ====================

function averageAge(array) {
  let sum = 0;

  array.forEach(object => {return sum += object.age});

  return sum / array.length;
}


// ========== 6. Найти самого старшего/младшего пользователя ====================

function mostOldYung(array) {
  let maxAge = array[0].age;
  let minAge = array[0].age;
  let mostOldUser = [];
  let mostYungUser = [];

  function minMaxAge(object) {
    if (object.age >= maxAge) {
      maxAge = object.age;
    }
    else if (object.age <= minAge) {
      minAge = object.age;
    }
  }

  array.forEach(object => minMaxAge(object))

  for (object of array) {
    if (object.age === maxAge) {
      mostOldUser.push(object)
    }
    else if (object.age === minAge) {
      mostYungUser.push(object)
    }
  }

  return mostOldUser, mostYungUser;
}


const users = [
  { name: 'Бенджамин', age: 63 },
  { name: 'Бронислав', age: 67 },
  { name: 'Богдан', age: 41 },
  { name: 'Борис', age: 52 },
  { name: 'Бронислав', age: 40 },
  { name: 'Бенджамин', age: 55 },
  { name: 'Богдан', age: 22 },
  { name: 'Богдан', age: 61 },
  { name: 'Булаг', age: 64 },
  { name: 'Булаг', age: 66 },
  { name: 'Бенджамин', age: 48 },
  { name: 'Богдан', age: 20 },
  { name: 'Богдан', age: 20 },
  { name: 'Бенджамин', age: 50 },
  { name: 'Булат', age: 29 },
  { name: 'Булаг', age: 58 },
  { name: 'Бенджамин', age: 62 },
  { name: 'Бенджамин', age: 38 },
  { name: 'Булат', age: 37 },
  { name: 'Борис', age: 25 },
  { name: 'Богдан', age: 51 },
  { name: 'Бенджамин', age: 33 },
  { name: 'Булат', age: 40 },
  { name: 'Булаг', age: 37 },
  { name: 'Булаг', age: 58 },
  { name: 'Бронислав', age: 52 },
  { name: 'Булат', age: 48 },
  { name: 'Бенджамин', age: 60 },
  { name: 'Богдан', age: 27 },
  { name: 'Булаг', age: 45 },
  { name: 'Бахрам', age: 58 },
  { name: 'Бенджамин', age: 66 },
  { name: 'Бахрам', age: 32 },
  { name: 'Бахрам', age: 42 },
  { name: 'Бенджамин', age: 23 },
  { name: 'Борислав', age: 46 },
  { name: 'Бронислав', age: 20 },
  { name: 'Борис', age: 34 },
  { name: 'Богдан', age: 33 },
  { name: 'Борислав', age: 30 },
  { name: 'Богдан', age: 51 },
  { name: 'Булаг', age: 41 },
  { name: 'Борислав', age: 35 },
  { name: 'Борис', age: 60 },
  { name: 'Бенджамин', age: 64 },
  { name: 'Булаг', age: 63 },
  { name: 'Булат', age: 59 },
  { name: 'Булат', age: 20 },
  { name: 'Булаг', age: 60 },
  { name: 'Бенджамин', age: 47 }
]



// ========== 7. Snake ====================

function snake(n) {
  let result = [];
  if (n <= 1)  {
    result.push(n);
    return result;
  }
  else {
    
    for (let i = 0; i < n; i++) {
      let innerArray = [];
      result.push(innerArray);
    }
  
    let count = 1;
    let countForward = n;
    let countBack = 0;
    let column = 0;
    let row = 0;
    let temp = 0;
  
    function horizontalMoveRight(r, c) {
      for(; c < countForward - 1; c++) {
        result[r][c] = count;
        count++;
      }
      column = c;
      row = r;
    }
  
    function verticalMoveDown(r, c) {
      for (; r < countForward - 1; r++) {
        result[r][c] = count;
        count++;
      }
      column = c;
      row = r;
    }
  
    function horizontalMoveLeft(r, c) {
      for(; c > countBack; c--) {
        result[r][c] = count;
        count++;
      }
      column = c;
      row = r;
    }
  
    function verticalMoveUp(r, c) {
      for(; r > countBack; r--) {
        result[r][c] = count;
        count++;
      }
      column = c;
      row = r;
    }
    
    (n % 2 === 0) ? temp : temp += 1;
    
    for (; temp < n/2; temp++) {
      horizontalMoveRight(row, column)
      verticalMoveDown(row, column)
      horizontalMoveLeft(row, column)
      verticalMoveUp(row, column)
      column += 1;
      row += 1;
      
      if (n/2 - temp !== 0.5) {
        countForward -= 1;
        countBack += 1;
      }
      else {
        horizontalMoveRight(row, column)
      }
     
    }
    
    return result;
  }
  
}
