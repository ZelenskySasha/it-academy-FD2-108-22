function ReverseArray(number) {
    let array = [];
    for (i = 1; i <= String(number).length; i++) {
        array.push(String(number)[String(number).length - i]);
    }
    return array;
}
console.log(ReverseArray(348597));