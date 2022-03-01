function Pyramid(l) {
    let arr = [];
    for (let i = 0; i < l; i++) {
        let arr2 = [];
        for (let n = 0; n <= i; n++) {
            arr2.push(1);
        }
        arr[i] = arr2;
    }
    return (arr);
}
console.log(JSON.stringify(Pyramid(0)));
console.log(JSON.stringify(Pyramid(1)));
console.log(JSON.stringify(Pyramid(2)));
console.log(JSON.stringify(Pyramid(3)));