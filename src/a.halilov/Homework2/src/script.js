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
console.log(repeatStr(6, "Hello "));

/* Второй вариант, не знаю, правильно или нет, но мне кажется так прикольно  */
function repeatStrElse(n, str){
    console.log(str.repeat(n));
}
repeatStrElse(6, "I");
repeatStrElse(6, "Hello ");


/* Задача 3 MaxMin*/

function highAndLow(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + "  " + Math.min.apply(null, numbers);

}

console.log(highAndLow("1 2 3 4 5 6 7 9"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));


