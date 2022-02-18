arr = [1, 2, 3, 4, 5,-2];

const isAllPositive = arr.every((value) => value > 0);
const isAllPositive2 = every(arr, (value) => value > 0);
console.log(isAllPositive, isAllPositive2);

function every(array, everyFn) {
  for (let i = 0; i < array.length; i++) {
    if (!everyFn(array[i], i, array)) {
      return false;
    }
  }
  return true;
}
