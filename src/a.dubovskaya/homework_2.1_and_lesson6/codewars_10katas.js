//Reversed Strings

let str = 'world';
function solution(str){
    return(str.split('').reverse().join(''));
}

//String repeat

let str = "Hello";
function repeatStr () {
    console.log(str.repeat(5));
}
repeatStr();

//Highest and Lowest


function hightAndLow(numbers) {

    array = numbers.split(' ');

    let high = parseInt(array[0]);
    let low = parseInt(array[0]);

    for(let element of array) {
        let num = parseInt(element)
        if(high < num) {
            high = num;
        }
        if(low > num) {
            low = num;
        }
    }
return(high, low);
}

hightAndLow('7 3 90 22');

//Isograms


function isIsogram(str){
    str = str.toLowerCase().split('');
    let unique = new Set(str);

    if (str.length == unique.size) {
        return( true); 
    } else {
        return (false); 
    }
}

//Mumbling

function accum(str) {
    let res = '';
    for(let i=0; i < str.length; i++){
        res += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + (i < str.length - 1 ? '-' : '');
    }
    return res;
}

//Count by x

function countBy(x,n) {
    const arr = [];
    let times = n;
    for(let i = x; times > 0; i += x ) {
        arr.push(i);
        times--;
    }
    return arr;
}

// String to array

function stringToArray(string) {
    return string.split('');
}


//Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
    if(!input || !input.length) return [];
    let f = 0, s = 0;
    input.forEach(elem => {
        if(elem > 0) {
            f++;
        } else {
            s += elem;
        }
    });
    return [f, s];
}

//Square(n) Sum

function squareSum(numbers){
    let sum = 0;
    let squares = numbers.map(i => i*i);
    squares.forEach(i => {
        sum += i;
    })

    return sum;
}

//Convert number to reversed array of digits

function digitize (numbers) {
    return String(numbers).split('').map(Number).reverse()
}
