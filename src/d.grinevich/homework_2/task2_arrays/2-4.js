function squareSum(numbers){
    let count = 0;
    for(let i = 0; i< numbers.length; i++){
        let result = numbers[i];
        count += result ** 2;
    }
    return count
}
console.log(squareSum([1,2,2]));