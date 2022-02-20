function pyramid(number) {
  const result = [];
  for (let i = 0; i < number; i++) {
    result.push([...Array(i + 1)].fill(1));
  }
  return result;
}
console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));
