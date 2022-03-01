function accum(str) {
    result = "";
    for (i = 0; i < str.length; i++) {
        if (i != 0) {
            result = result + "-";
        }
        result = result + str[i].toUpperCase();
        for (n = 0; n < i; n++) {
            result = result + str[i].toLowerCase();
        }
    }
    return result;
}
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));