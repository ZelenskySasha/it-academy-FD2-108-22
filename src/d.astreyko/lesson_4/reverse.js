function reverse(array) {
  const reversedArray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }
  return reversedArray;
}

console.log(reverse([1, 2, 3, 4, 5]));

