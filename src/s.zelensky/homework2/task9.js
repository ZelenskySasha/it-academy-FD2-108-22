function SquareSum(array) {
    result = 0;
    for (i = 0; i < array.length; i++) {
        result += Math.pow(array[i], 2);
    }
    return result;
}
console.log(SquareSum([1, 2, 2]));