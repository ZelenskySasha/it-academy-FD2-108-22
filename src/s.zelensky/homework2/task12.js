function ArrayPlus(arr) {
    let str = "";
    let newnumber;
    let newarray = [];
    for (let i = 0; i < arr.length; i++) {
        str = str + arr[i];
    }
    newnumber = parseInt(str) + 1;
    str = newnumber + "";
    for (let i = 0; i < str.length; i++) {
        newarray.push(str[i]);
    }
    return newarray;
}
console.log(ArrayPlus([2, 3, 9]))
console.log(ArrayPlus([4, 3, 2, 5]))
console.log(ArrayPlus([0]))
console.log(ArrayPlus([9, 9, 9, 9, 9]))