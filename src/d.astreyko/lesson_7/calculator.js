const calculator = {
  add1(num) {
    this.num1 = num;
    return this;
  },
  add2(num) {
    this.num2 = num;
    return this;
  },
  sum() {
    return this.num1 + this.num2;
  }
};

const sum = calculator.add1(2)
  .add2(9)
  .sum();

console.log(sum);
