//Reversed Strings
function solution(str){
  return [...str].reverse().join('');
}

//String repeat
function repeatStr (n, s) {
  return s.repeat(n);
}

//Highest and Lowest
function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//Isograms
function isIsogram(str){
  str = str.toUpperCase().split('');
  return str.filter((item, index) => str.indexOf(item) !== index).length === 0
}

//Mumbling
function accum(s) {
  const str = s.split('');
  return [...str].map((item, index)=>
    item.toUpperCase() + item.toLowerCase().repeat(index)
  ).join('-');
}