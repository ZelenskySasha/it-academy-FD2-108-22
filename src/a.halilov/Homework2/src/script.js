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

/* Второй вариант  */
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

console.log(countBy(1, 10));
console.log(countBy(2, 5));

/* Задача 2  Convert a string to an array*/


function convertToArray(str){
    let array =  str.split(" ");
    return array
}
console.log(convertToArray("I love arrays they are my favorite"));

/* Задача 3 Count of positives / sum of negatives */

function positivesCountAndNegativeSum(input){
    let positive = 0;
    let negative = 0;

    if(input === null || input === undefined || input.length === 0){
        return result;
    }else{
        input.forEach((num) => num > 0 ? positive++ : negative += num);
    }

    return [positive, negative];

}   
console.log(positivesCountAndNegativeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));

/* Задача 4 Square(n) Sum */


function sqaureSum(n){
    let sum = 0;
    for (let i = 0; i < n.length; i++){
        sum += n[i] **2;
    }
    return sum;

}

console.log(sqaureSum([1,2,2]));


/* Задача 5 Convert number to reversed array of digits */


function reverseArray(number){
    let array = [];
    const str = number.toString();
    let result = str.split("").reverse(" ").join(" ");
    array.push(result);

    return array;
}

console.log(reverseArray(123456));



/* Доп задачи */
/* Задача 1 palindrom */


function isPalindrom(str){
    let newStr = str.toString().toLowerCase();
    let array = newStr.split("");
    let arraySort = array.slice().sort();
    for (let i = 0; i<arraySort.length; i++){
        if(arraySort[i+1] === arraySort[i]){
            return true;
        }
    }
    return false;
}

console.log(isPalindrom("Anna"));
console.log(isPalindrom("walter"));
console.log(isPalindrom(12321));
console.log(isPalindrom(123456));


/* Задача 2 +1 Array */
function arrayPlusOne(arr){
    let str = arr.join("");
    let num = Number(str);

    let sum = num + 1;
    
    let nil = sum.toString();
    
    return Array.from(nil);
}

console.log(arrayPlusOne([4,1,1,9]));





/* Задача 3 pyramid */


function pyramid(n){
    let arr = [];

    let pyramid = [1];
    

}