function getHighAndLowNumber(string) {
  const array = string.split(" ").map((num) => Number(num));
  const max = Math.max(...array);
  const min = Math.min(...array);
  return `самое большое число: ${max}; самое маленькое число: ${min}.`;
}

console.log(getHighAndLowNumber("1 2 3 4 5"));
console.log(getHighAndLowNumber("1 2 -3 4 5"));
console.log(getHighAndLowNumber("1 9 3 4 -5"));
