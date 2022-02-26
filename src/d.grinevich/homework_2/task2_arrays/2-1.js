function countBy(num1 , num2) {
  let array = [];
    let  count = 0
    for(let i = 0; i < num2;i++){
    array.push(count = count+num1)   
      }
     return array
}
console.log(countBy(1,10))
console.log(countBy(2,5));
