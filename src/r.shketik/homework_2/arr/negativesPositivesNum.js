function negativesPositivesNum (arr){
   let positivesArr = [];
    let negativesArr = [];
    let resultNegatives = '';
    let resultPositives = '';
    let result = [];
   
    arr.filter(function(number) {
      if(number > 0){
        positivesArr.push(number)
      } else {
        negativesArr.push(number)
        }
    });

    for (i = 0; i < negativesArr.length; i++) {
        resultNegatives -= negativesArr[i];   
    }

    for (i = 0; i < positivesArr.length; i++) {
       resultPositives=positivesArr.length;    
    }

    return result = [resultPositives, -resultNegatives];   
}    

// console.log(negativesPositivesNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,]))
