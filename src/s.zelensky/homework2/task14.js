function flatten(arr) {

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let n = 0; arr[i][n] != null; n++) {
            result.push(arr[i][n]);
        }
    }
    if (result == "") {
        return arr;
    }
    return result;
}
console.log(JSON.stringify(flatten([1, 2, 3])));
console.log(JSON.stringify(flatten([
    [1, 2, 3],
    ["a", "b", "c"],
    [1, 2, 3]
])));
console.log(JSON.stringify(flatten([
    [
        [1, 2, 3]
    ]
])));
console.log(JSON.stringify(flatten([1])));
console.log(JSON.stringify(flatten([
    [
        [1]
    ]
])));