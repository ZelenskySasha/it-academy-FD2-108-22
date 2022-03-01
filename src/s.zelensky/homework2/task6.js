function countBy(n, x) {
    var array = [];
    for (i = 0; i <= x; i++) {

        array[i] = n * i;
    }


    return array.splice(1, x);
}
console.log(countBy(1, 10));
console.log(countBy(2, 5));