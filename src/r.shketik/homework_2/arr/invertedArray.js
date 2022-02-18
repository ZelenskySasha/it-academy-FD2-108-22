function invertedArray (num){

let array = (""+num).split("").map(Number)
const reversed = array.reverse();
return reversed;
}
// console.log(invertedArray(348597));
// console.log(invertedArray(0));