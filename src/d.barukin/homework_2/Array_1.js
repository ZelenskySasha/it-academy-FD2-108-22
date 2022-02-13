function countBy (x, n) {
    let array = [];
    for (let i = 1; i <= n; i++)
        array.push(x * i);
    return array;
}
  
countBy (3, 5)