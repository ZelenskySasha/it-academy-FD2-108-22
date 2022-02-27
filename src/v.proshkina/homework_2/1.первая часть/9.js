function calcSquareSum(array) {
  return array.reduce((sum, current) => sum + current ** 2, 0);
}

console.log(calcSquareSum([1, 2, 2]));
console.log(calcSquareSum([1, 12, 6]));
