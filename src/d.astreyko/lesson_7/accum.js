function Accumulator(initialValue) {
  this.value = initialValue;
  this.add = function (numToAdd) {
    this.value += numToAdd;
  };
}

const accum = new Accumulator(0);

const accum2 = new Accumulator(5);
console.log(accum.value);
console.log(accum2.value);
accum.add(5)
accum.add(4)
console.log(accum.value);
console.log(accum2.value);
