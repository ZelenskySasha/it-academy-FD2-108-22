function createPhoneNumber(arr) {
    array = arr;
    result = "(";
    for (let i = 0; i < array.length; i++) {
        if (i == 3) { result = result + ") "; }
        if (i == 6) { result = result + "-"; }
        result = result + array[i];

    }
    return result;
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([4, 5, 5, 3, 3, 3, 4, 7, 8, 9]));