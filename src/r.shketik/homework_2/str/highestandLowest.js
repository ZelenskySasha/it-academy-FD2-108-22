function highAndLow(arr){
  
  let str = arr.split(' ');
  

  let min = arr[0];
  let max = arr[0];

  str.forEach(function(val) {
    
    max = Math.max(max, val);
    min = Math.min(min, val);
  });
  return [max, min];
  
}

// console.log(highAndLow("1 2 3 4 5").join(" "));
// console.log(highAndLow("1 2 -3 4 5").join(" "));  
// console.log(highAndLow("1 9 3 4 -5").join(" "));

