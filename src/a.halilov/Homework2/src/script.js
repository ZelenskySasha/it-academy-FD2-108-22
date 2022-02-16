/* Задача 1  reversed */

function reverseString(str){
    return str.split("").reverse("").join("");
}

console.log(reverseString("World"));
console.log(reverseString("Word"));

/* Задача 2 -  repeatStr*/

function repeatStr(n, str){
    let newStr = "";
    for (let i = 0; i < n; i++){
        newStr += str;
    }
    return newStr;
}

console.log(repeatStr(6, "I"));