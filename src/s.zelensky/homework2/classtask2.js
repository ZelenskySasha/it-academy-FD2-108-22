function MiddleLetter(str) {
    let result = "";
    if (str.length % 2 == 0) {
        result = str[(str.length / 2) - 1] + str[(str.length / 2)];
    } else {
        result = str[((str.length - 1) / 2)];
    }
    return result;
}
console.log(MiddleLetter("test"));
console.log(MiddleLetter("testing"));
console.log(MiddleLetter("middle"));
console.log(MiddleLetter("A"));