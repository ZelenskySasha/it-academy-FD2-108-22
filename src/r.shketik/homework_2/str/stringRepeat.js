function stringRepeat(num, str){

  let newString = "";

  for(let i = 1; i <= num; i++){
    newString += str;
  }
  return newString;
}

// console.log(stringRepeat(2,'world'));