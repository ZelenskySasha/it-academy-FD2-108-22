function countBy(n, x){
    let arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(n+n*i);
    }
    return arr;
  }
console.log(countBy(1,10));
console.log(countBy(2,5));