function countBy(x, n) {
  const array = [];
  let potentialArrayLength = x * n;
  for (let i = 1; i <= potentialArrayLength; i++) {
    if (i % x === 0) {
      array.push(i);
    }
  }
  return array;
}

console.log(countBy(1, 10));
console.log(countBy(2, 5));
console.log(countBy(11, 25));
console.log(countBy(3, 15));
