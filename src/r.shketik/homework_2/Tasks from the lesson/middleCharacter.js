function getMiddle(string)
{
  return string.substring(
    (string.length % 2 === 0 
    ? string.length / 2 - 1 
    : string.length / 2 + 1) ,

     (string.length % 2 === 0 
    ?  string.length / 2 + 1
    :  string.length / 2 ));
}

console.log(getMiddle('testing'))
console.log(getMiddle('test'))
console.log(getMiddle('middle'))
console.log(getMiddle('A')) 




