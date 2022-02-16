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

function highAndLow(strOfNumber){
    let array = strOfNumber.split(" ");
    for (let i = 0; i < strOfNumber.length; i++){
        array[i] = parseInt(array[i]);
    }
    let max = array[0];
    let min = array[0];

    for (let i = 0; i < strOfNumber.length-1; i++){
        if((i+1 !== array.length) && max <= array[i+1]){
            max = array[i+1];
        }
        if((i+1!== array.length) && min >= array[i+1]){
            min = array[i+1];
        }
    }

    return `${max} ${min}`;
}

console.log(highAndLow("1 2 3 4 5"));





function highAndLowElse(numbers){
    numbers = numbers.split(" ");
    return Math.max.apply(null, numbers) + "  " + Math.min.apply(null, numbers);

}

console.log(highAndLowElse("1 2 3 4 5"));
console.log(highAndLowElse("1 2 -3 4 5"));
console.log(highAndLowElse("1 9 3 4 -5"));




/* Задача 4 Isograms */


function isIsogram(str){
    
    if(str.isEmpty){
        return true;
    }else{
        str = str.toLowerCase();
    }
    let array = str.split("");
    let arrSort = array.slice().sort();
    for(let i = 0; i < array.length; i++){
        if(arrSort[i + 1] === arrSort[i]){
            return false;
        }
    }
    return true;

}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("aba"));
console.log(isIsogram("moOse"));

/* Задача 5 Acum */

function acum(str){
    const result = [];
    const lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++){
        let str = lowerStr[i].toUpperCase();
        for(let j = 0; j<i; j++){
            str+=lowerStr[i];
        }
        result.push(str);
    } 
   return result.join("-");
}
console.log(acum("asdf"));
console.log(acum("RqaEzty"));
console.log(acum("cwAt"));




/* Массивы */
/* Задача 1 
Count by X */


function countBy(x, n){
    const result = [];
    const limit = x*n;
    for (let i = 1; i<= limit; i++){
        if( i%x === 0){
            result.push(i);
            
        }
    }
    return result;
}

console.log(countBy(3, 10));





