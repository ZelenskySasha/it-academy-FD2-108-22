function ReverseArray(number) {
    let str = String(number);
    let array = [];
    for (i = 1; i <= str.length; i++) {
        array.push(str[str.length - i]);
    }
    return array;
}
console.log(ReverseArray(348597));