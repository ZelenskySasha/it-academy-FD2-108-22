function digitize(n) {
    if (n.length != 0) {
    let arr = (""+n).split("").map(Number);
    return arr.reverse();
  }
}
console.log(digitize(348597));