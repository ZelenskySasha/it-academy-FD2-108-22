

function isIsogram(str) {
 
  let arr = [];
  
  for (const i of str.toLowerCase()) {
    if (arr[i]) {
      return false;
    } else {
      arr[i] = true;
    }
  }
    return true;
}

// console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('aba'));
// console.log(isIsogram('moOse'));