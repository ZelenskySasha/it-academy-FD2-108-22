function combine(...End) {
    let resultObj = {};
    for (n = 0; n < End.length; n++) {
        for (let keyinside in End[n]) {
            if (keyinside in resultObj) {
                resultObj[keyinside] = resultObj[keyinside] + End[n][keyinside];
            } else {
                resultObj[keyinside] = End[n][keyinside];
            }
        }
    }
    return resultObj;
}
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
console.log(JSON.stringify(combine(objA, objB)));
const objC = { a: 1, c: 1, u: 3, p: 4 }
console.log(JSON.stringify(combine(objA, objB, objC)));