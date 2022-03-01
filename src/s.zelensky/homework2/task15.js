function LargestSum(arr) {
    max1 = 0;
    max2 = 0;
    nam = 0;
    result = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max1) {
            max1 = arr[i];
            nam = i;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max2 && i != nam) {
            max2 = arr[i];

        }
    }
    result = max1 + max2;
    if (arr.length < 2) { result = arr[0] * 2; }
    return result;
}
console.log(LargestSum([10, 14, 2, 23, 19]));
console.log(LargestSum([99, 2, 2, 23, 19]));
console.log(LargestSum([10, 10, 9, 9, 8]));
console.log(LargestSum([10]));