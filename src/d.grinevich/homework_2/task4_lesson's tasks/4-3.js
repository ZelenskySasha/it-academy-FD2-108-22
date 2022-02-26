const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
function combine() {
    result = {};
    for (const key in objA) {
        if (key in objB) {
            result[key] = objA[key] + objB[key]
        } else {
            result[key] = objA[key]
        }
    }

    for (const key in objB) {
        if (!(key in objA)) {
            result[key] = objB[key]
        }
    }
    return result
}
console.log(combine(objA, objB));








