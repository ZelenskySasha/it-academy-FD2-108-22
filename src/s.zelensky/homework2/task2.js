function repeatStr(number, sting) {
    n = number;
    str = sting;
    let result = "";
    for (i = 0; i < n; i++) {
        result = result + str;
    }
    return result;
}
console.log(repeatStr(6, "I"));
console.log(repeatStr(5, "Hello"));