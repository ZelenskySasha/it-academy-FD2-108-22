function total1(str) {
    let string = str;
    let result = "";
    for (let i = 0; i < string.length; i++) {
        result = result + string[i].charCodeAt();
    }
    return result;
}

function total2(str) {
    let string = total1(str);
    let result = "";
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "7") {
            result = result + "1"
        } else {
            result = result + string[i];
        }
    }
    return result;
}

function count(str) {
    return parseInt(total1(str)) - parseInt(total2(str));
}
console.log(count("ABC"));
console.log(count("Aaa"));