function highAndLow(numbers){
    // ...
   let lowNumber = ""
   let highNumber = ""
   let array = (numbers.split(" ").sort((a,b) => a -b )); 
   lowNumber = lowNumber + array[array.length-1] + " ";
   highNumber = highNumber + array[0];
   return lowNumber + highNumber;
     
  }
  console.log(highAndLow("2 1 -3 6 7 8 -2 55 10"));