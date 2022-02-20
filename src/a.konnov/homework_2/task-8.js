function countPositivesSumNegatives(input = 0) {
    let result = [];
    if (input.length !== 0) {
        let positiveNumbers = 0;
        let negativeNumSum = 0;
        let negativeArr = [];
        for (i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                positiveNumbers++;
            } else if (input[i] < 0){
                negativeArr.push(input[i]) 
            }

        }
        negativeNumSum = negativeArr.reduce((sum, current) => sum + current);
        result.push(positiveNumbers, negativeNumSum);
        
    } 
    return result;   
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([]));