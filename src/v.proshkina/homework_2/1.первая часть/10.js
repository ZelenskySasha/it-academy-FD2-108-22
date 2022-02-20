function digitize(number) {
  return number
    .toString()
    .split("")
    .reverse()
    .map((num) => Number(num));
}

console.log(digitize(348597));
console.log(digitize(0));
