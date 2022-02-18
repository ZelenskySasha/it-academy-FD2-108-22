function countBy (numX, numY){
  let newArr = [];
  let doublesArr = [];
  
  for(let i = 0; i < numY; i++){
     newArr.push(numX); 
  }

  for( let i= 0; i < newArr.length; i++){
    let doubles = newArr[i] * (i+1);
    doublesArr.push(doubles)
 }
 
 return doublesArr;
}  

// console.log(countBy(1,10));
// console.log(countBy(2,5));
