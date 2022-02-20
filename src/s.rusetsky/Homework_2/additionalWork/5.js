function largestPairSum (numbers) {
  let max = numbers[0];
  let indexMax = 0;
  let secMax = Math.min.apply(Math, numbers);
 for (i=0; i<numbers.length; i++) {
   if (numbers[i]>max){
     max=numbers[i];
     indexMax = i;
   }
  }
  for (i=0; i<numbers.length; i++) {
    if (numbers[i]===max && i === indexMax ){
      continue;
    }
    if (numbers[i]>secMax){
      secMax=numbers[i];
      console.log(secMax);
    }
  }
  return max + secMax;
}