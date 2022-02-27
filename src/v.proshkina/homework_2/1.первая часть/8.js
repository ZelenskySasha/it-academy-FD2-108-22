function countPositivesSumNegatives(array) {
  let countPositives = 0;
  let sumNegatives = 0;
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      countPositives++;
    } else if (array[i] < 0) {
      sumNegatives += array[i];
    }
  }

  result.push(countPositives);
  result.push(sumNegatives);
  return result;
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
