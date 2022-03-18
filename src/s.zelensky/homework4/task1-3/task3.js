function toSquare(str) {
    let result = "";
    let string = str.toString();
    for (let i = 0; i < string.length; i++) {
        result = result + Math.pow(parseInt(string[i]), 2);
    }
    return result;
}
console.log(toSquare(9119));
console.log(toSquare(3233));