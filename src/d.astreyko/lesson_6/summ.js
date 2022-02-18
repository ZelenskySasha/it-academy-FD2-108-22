
let arr = [1, 2, 3, 4, 5, -5, 2, 4];

let sum = 0;
arr.forEach((num) => sum += num);
arr.reduce((sum, current) => sum + current, 0);

let result = arr.reduce((accum, number) => {
  accum+=number;
  return accum;
}, 0);

console.log(sum);
console.log(result);

