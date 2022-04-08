let n = 2;
let result = [];
let sum = 0;
let max = 0;
let min = 0;
let sumarr;
let minarr;
let maxarr;
let randomnumber = 0;
for (let ii = 0; ii < n; ii++) {
    let arr = [];
    sumarr = 0;
    for (let i = 0; i < n; i++) {
        randomnumber = Math.floor(Math.random() * 100)
        if (ii == 0 && i == 0) {
            min = randomnumber;
            max = randomnumber;
        }
        if (randomnumber > max) { max = randomnumber; }
        if (randomnumber < min) { min = randomnumber; }
        arr[i] = randomnumber;
        // sum = sum + randomnumber;
        sumarr = sumarr + randomnumber;
    }
    sum = sum + sumarr;
    if (ii == 0) {
        minarr = sumarr;
        maxarr = sumarr;
    }
    if (sumarr > maxarr) { maxarr = sumarr; }
    if (sumarr < minarr) { minarr = sumarr; }
    arr[n + 1] = "сумма=" + sumarr;
    result.push(arr);
}
console.table(result);
console.log("Сумма всех строк:" + sum);
console.log("Самое маленькое число:" + min);
console.log("Самое большое число:" + max);
console.log("самая маленькая строка:" + minarr);
console.log("самая большая строка:" + maxarr);