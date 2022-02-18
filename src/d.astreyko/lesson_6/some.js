arr = [1, 2, 3, 4, 5];

const hasOneNegative = arr.some((value) => value < 0);
const hasOneNegative2 = some(arr, (value) => value > 0);
console.log(hasOneNegative);

function some(array, everyFn) {
  for (let i = 0; i < array.length; i++) {
    if (!everyFn(array[i], i, array)) {
      return false;
    }
  }
  return true;
}
