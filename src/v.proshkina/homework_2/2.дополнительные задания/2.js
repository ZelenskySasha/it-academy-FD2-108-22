function upArray(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
      return null;
    }
  }
  let needNum = Number(array.join("")) + 1;
  return String(needNum)
    .split("")
    .map((num) => Number(num));
}

console.log(upArray([1, 2, 3]));
console.log(upArray([2, 3, 9]));
console.log(upArray([4, 3, 2, 5]));
console.log(upArray([1, 9, 9]));
console.log(upArray([1, -9]));
