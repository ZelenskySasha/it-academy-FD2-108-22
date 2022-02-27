function upArray(arr) {
    if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
        return null;
    }
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
            return null;
        }
    }
    for (let k = arr.length - 1; k > -1; k--) {
    if (arr[k] !== 9) {
            arr[k] = arr[k] + 1;
            break;
        } else {
            arr[k] = 0;
        }
        if (k === 0) {
            arr.unshift(1);
        }
    }
    return arr;
}