function getCount(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let letter in str) {
    if (vowels.includes(str[letter])) count++;
  }
  return count;
}

// getCount("ooooooooooooooooooooooooa");

function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.ceil(s.length / 2 - 1)];
  }
}

// getMiddle('tests');

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };

function combine() {
  let arrOfArguments = Array.from(arguments);

  let arr = [];
  let result = {};

  for (let i = 0; i < arrOfArguments.length; i++) {
    arr.push(...Object.entries(arrOfArguments[i]));
  }
  arr.forEach((item) => {
    if (!result[item[0]]) {
      result[item[0]] = item[1];
    } else {
      result[item[0]] = result[item[0]] + item[1];
    }
  });

  return result;
}
combine(objA, objB);

const users = [
  { name: "Бенджамин", age: 63 },
  { name: "Бронислав", age: 67 },
  { name: "Богдан", age: 41 },
  { name: "Борис", age: 52 },
  { name: "Бронислав", age: 40 },
  { name: "Бенджамин", age: 55 },
  { name: "Богдан", age: 22 },
  { name: "Богдан", age: 61 },
  { name: "Булаг", age: 64 },
  { name: "Булаг", age: 66 },
  { name: "Бенджамин", age: 48 },
  { name: "Богдан", age: 20 },
  { name: "Богдан", age: 20 },
  { name: "Бенджамин", age: 50 },
  { name: "Булат", age: 29 },
  { name: "Булаг", age: 58 },
  { name: "Бенджамин", age: 62 },
  { name: "Бенджамин", age: 38 },
  { name: "Булат", age: 37 },
  { name: "Борис", age: 25 },
  { name: "Богдан", age: 51 },
  { name: "Бенджамин", age: 33 },
  { name: "Булат", age: 40 },
  { name: "Булаг", age: 37 },
  { name: "Булаг", age: 58 },
  { name: "Бронислав", age: 52 },
  { name: "Булат", age: 48 },
  { name: "Бенджамин", age: 60 },
  { name: "Богдан", age: 27 },
  { name: "Булаг", age: 45 },
  { name: "Бахрам", age: 58 },
  { name: "Бенджамин", age: 66 },
  { name: "Бахрам", age: 32 },
  { name: "Бахрам", age: 42 },
  { name: "Бенджамин", age: 23 },
  { name: "Борислав", age: 46 },
  { name: "Бронислав", age: 20 },
  { name: "Борис", age: 34 },
  { name: "Богдан", age: 33 },
  { name: "Борислав", age: 30 },
  { name: "Богдан", age: 51 },
  { name: "Булаг", age: 41 },
  { name: "Борислав", age: 35 },
  { name: "Борис", age: 60 },
  { name: "Бенджамин", age: 64 },
  { name: "Булаг", age: 63 },
  { name: "Булат", age: 59 },
  { name: "Булат", age: 20 },
  { name: "Булаг", age: 60 },
  { name: "Бенджамин", age: 47 },
];

let sortAgeMaxMin = users.sort((a, b) => {
  return b.age - a.age;
});
let hasOldestUser = sortAgeMaxMin[0];
let hasYoungestUser = sortAgeMaxMin[sortAgeMaxMin.length - 1];

const averageAge = (arr) => {
  let sum = arr.reduce((acc, item) => {
    return (acc += item.age);
  }, 0);

  return Math.round(sum / arr.length);
};
// averageAge(sortAgeMaxMin);
//
function toCreateMatrix(n) {
  let arr = [];
  let matrix = [];
  for (let i = 1; i <= n * n; i++) {
    arr.push(i);
  }
  while (arr.length > 0) {
    let matrixItem = arr.splice(0, n);
    matrix.push(matrixItem);
  }
  return matrix;
}

let matrix = toCreateMatrix(5);
console.log(matrix);
/**
 * идея решения взята из этого ролика https://www.youtube.com/watch?v=I58renaSzq4
 * но сам разобрался)
 */
function snakeSort(n) {
  let count = n.length;
  let number = 1;
  for (let i = 0; i < count / 2; i++) {
    // i = 0, i = 1, i = 2
    for (let j = i; j < count - i; j++) {
      //прошлись по первой строке матрицы
      matrix[i][j] = number++;
    }
    //прошлись по правому стодбцу
    for (let k = i + 1; k < count - i; k++) {
      matrix[k][count - 1 - i] = number++;
    }
    //прошлись по последней строке матрицы
    for (let j = count - i - 2; j >= i; j--) {
      matrix[count - 1 - i][j] = number++;
    }
    //прошлись по левому краю
    for (let k = count - 2 - i; k > i; k--) {
      matrix[k][i] = number++;
    }
  }
  return n;
}
// console.log(snakeSort(matrix));
