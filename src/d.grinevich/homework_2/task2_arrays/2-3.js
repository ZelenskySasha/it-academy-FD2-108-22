function countPositivesSumNegatives(input) {
    let positiveCount = 0;
    let NegativeCount = 0;
    let array = [];
    if (input == null || input.length == 0) {
        return array
    }
    for (let i = 0; i < input.length; i++) {
        if (input[0] == 0 && input[1] == 0) {
            return array
        }
        if (input[i] > 0) {
            positiveCount++
        } else if (input[i] < 0) {
            NegativeCount += input[i]
        }
    }
    array.push(positiveCount, NegativeCount)
    return array
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 0]));
console.log(countPositivesSumNegatives(null));
console.log(countPositivesSumNegatives([]));
