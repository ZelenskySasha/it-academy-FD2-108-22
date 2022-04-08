class Animal {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    count() {
        i++;
        //console.log(i);
        this.width++;
        //console.log(this.width);
        this.minus();

    }
    minus() {
        console.log(this.width);
        console.log(i);
    }
}
console.log("ssdd");

function sas() {
    console.log("sss");
}
sas();
let sum = (a, b) => a + b;

/* Эта стрелочная функция представляет собой более короткую форму:

let sum = function(a, b) {
  return a + b;
};
*/

console.log(sum(1, 2)); // 3