function largestPairSum (numbers) {
    numbers.sort((a,b) => b-a); 
      return numbers[0] + numbers[1]
     }
  console.log(largestPairSum([10, 14, 2, 23, 19]));  