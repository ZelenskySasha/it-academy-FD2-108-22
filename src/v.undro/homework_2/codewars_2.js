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
