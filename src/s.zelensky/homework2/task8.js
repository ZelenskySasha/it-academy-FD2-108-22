function CountArray(array) {
    let result = [1];
    pos = 0;
    neg = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            pos++;
        }
        if (array[i] < 0) {
            neg = neg + array[i];
        }
    }
    result[0] = pos;
    result[1] = neg;
    return result;
}
console.log(CountArray([1, 1, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));