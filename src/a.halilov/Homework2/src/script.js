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
    const arr = [];
    for(let i = 0; i<n; i++){
        arr.push([...Array(i+1)].fill(1))
    }
    return arr;
}
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));




/* Задача 4 Flatten*/

function flatten(arr){
    let result = arr.flat();
    return result;
}
console.log(flatten([[1,2,3,4, [1,2,3], [1,2,3,4,5]]]));


/* Задача 5 largest sum */

function  largestPairSum(arr){
    let result = [];
    let newArr = arr.sort(function(a, b){
        return b - a;
    });
    return newArr[1] + newArr[0];

    
}
console.log(largestPairSum([10, 14, 2, 23, 19]));
console.log(largestPairSum([99, 2, 2, 23, 19]));



/* From lesson */

/* Задача 1 Vowel Count */

function count(str){
    
    let symbol = 0;
    
    let newStr = str.split("")
    for (i = 0; i < newStr.length; i++){
         if(newStr[i] === "a" || newStr[i] === "e" ||newStr[i] === "i" || newStr[i] === "o" ||newStr[i] === "u"){
            symbol++;
        }
    }

    return symbol;


}

console.log(count("aaaaf"));



/* Задача 2 Get the Middle Character*/


function middleCharacter(str){
    symbol = ""
    if (str.length % 2 == 0 ){
        let symbol = Math.floor(str.length/2);
        return ((str.slice(symbol -1, symbol+ 1)));
    }else{
        return (str.slice(str.length/2, (str.length/2)+1));
    }

} 
console.log(middleCharacter("test"));
console.log(middleCharacter("testing"));
console.log(middleCharacter("middle"));
console.log(middleCharacter("A"));



/* Задача 3  Combine objects*/


function combineObjects(objA, objB){
    objAll = {};
    let arr = [objA, objB];
    for (let i = 0; i<arr.length; i++){
        for(key in arr[i]){
            if(objAll[key] === undefined){
                objAll[key] = arr[i][key];
            } else{
                objAll[key] += arr[i][key];
            }
        }
    }
    return objAll;
}
console.log(combineObjects({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }));



const combineObjects = (...rest) => rest.reduce( ( result, current ) => {
    for(let key in current){
        let value = current[key];
        
        if(result[key] === undefined){
          result[key] = value;
        }else{
          result[key] += value;
        }
    }
    
    return result;
  }, {} );
  
  
  console.log(combineObjects({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }));




  /* Задача 4 Отсортировать по возрасту пользователей */


function sort(){
    
    const users = [
        { name: 'Бенджамин', age: 63 },
        { name: 'Бронислав', age: 67 },
        { name: 'Богдан', age: 41 },
        { name: 'Борис', age: 52 },
        { name: 'Бронислав', age: 40 },
        { name: 'Бенджамин', age: 55 },
        { name: 'Богдан', age: 22 },
        { name: 'Богдан', age: 61 },
        { name: 'Булаг', age: 64 },
        { name: 'Булаг', age: 66 },
        { name: 'Бенджамин', age: 48 },
        { name: 'Богдан', age: 20 },
        { name: 'Богдан', age: 20 },
        { name: 'Бенджамин', age: 50 },
        { name: 'Булат', age: 29 },
        { name: 'Булаг', age: 58 },
        { name: 'Бенджамин', age: 62 },
        { name: 'Бенджамин', age: 38 },
        { name: 'Булат', age: 37 },
        { name: 'Борис', age: 25 },
        { name: 'Богдан', age: 51 },
        { name: 'Бенджамин', age: 33 },
        { name: 'Булат', age: 40 },
        { name: 'Булаг', age: 37 },
        { name: 'Булаг', age: 58 },
        { name: 'Бронислав', age: 52 },
        { name: 'Булат', age: 48 },
        { name: 'Бенджамин', age: 60 },
        { name: 'Богдан', age: 27 },
        { name: 'Булаг', age: 45 },
        { name: 'Бахрам', age: 58 },
        { name: 'Бенджамин', age: 66 },
        { name: 'Бахрам', age: 32 },
        { name: 'Бахрам', age: 42 },
        { name: 'Бенджамин', age: 23 },
        { name: 'Борислав', age: 46 },
        { name: 'Бронислав', age: 20 },
        { name: 'Борис', age: 34 },
        { name: 'Богдан', age: 33 },
        { name: 'Борислав', age: 30 },
        { name: 'Богдан', age: 51 },
        { name: 'Булаг', age: 41 },
        { name: 'Борислав', age: 35 },
        { name: 'Борис', age: 60 },
        { name: 'Бенджамин', age: 64 },
        { name: 'Булаг', age: 63 },
        { name: 'Булат', age: 59 },
        { name: 'Булат', age: 20 },
        { name: 'Булаг', age: 60 },
        { name: 'Бенджамин', age: 47 }
    ]
    
    let newArr = users.sort((a, b) => a.age>b.age ? 1 : -1);
    return newArr;
}

console.log(sort());





