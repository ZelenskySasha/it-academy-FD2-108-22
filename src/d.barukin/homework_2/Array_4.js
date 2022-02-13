function sumSquareRoot (array) {
    let newArray = [];
        for (let i = 0; i < array.length; i++) {
            let square = array[i] * array[i];
            newArray.push(square);
        }
    let sum = 0;
        for (let j = 0; j < newArray.length; j++) {
            sum += newArray[j];
        }
    return sum;
}

sumSquareRoot([1, 5, 6, 10, 2, 6, 9, 2])