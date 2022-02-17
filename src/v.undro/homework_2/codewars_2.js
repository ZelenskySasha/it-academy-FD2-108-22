function isPalindrome(line) {
  return line.toString() == line.toString().split("").reverse().join("");
}

// isPalindrome(889);

function upArray(arr) {
  if (arr.length === 0) return null;
  if (arr.some((el) => typeof el !== "number" || el < 0 || el > 9)) return null;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== 9) {
      arr[i]++;
      break;
    } else {
      arr[i] = 0;
    }

    if (i === 0) {
      arr.unshift(1);
    }
  }

  return arr;
}

function pyramid(n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(new Array(i + 1).fill(1));
  }

  return result;
}
// pyramid(5);

function flatten(array) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result.push(...array[i]);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
// flatten([[[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]]);

function largestPairSum(numbers) {
  let maxNumber1 = Math.max(...numbers);
  numbers.splice(numbers.indexOf(Math.max(...numbers)), 1);
  let maxNumber2 = Math.max(...numbers);

  return maxNumber1 + maxNumber2;
}

// largestPairSum([-10, -8, -16, -18, -19]);
