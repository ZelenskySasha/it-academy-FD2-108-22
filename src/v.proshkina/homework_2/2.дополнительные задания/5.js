function largestPairSum(array) {
  let newArray = array.sort((a, b) => a - b).slice(-2);
  return newArray.reduce((sum, current) => sum + current, 0);
}

console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([99, 2, 2, 23, 19]));
