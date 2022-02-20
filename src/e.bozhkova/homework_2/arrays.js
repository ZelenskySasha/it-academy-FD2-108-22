//Count by X
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

//Convert a string to an array
function stringToArray(string){
  return string.split(' ');
}

//Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  return (input && input.length !== 0) ? 
    ([
       input.filter(item=>item > 0).length,
       input.reduce((sum,item)=>(item < 0) ? sum+item : sum,0)]) 
   :([]);
}

//Square(n) Sum
function squareSum(numbers){
  return numbers.reduce((sum,item)=>sum + Math.pow(item,2), 0);
}

//Convert number to reversed array of digits
function digitize(n) {
  return n.toString().split('').reverse().map(Number);
}