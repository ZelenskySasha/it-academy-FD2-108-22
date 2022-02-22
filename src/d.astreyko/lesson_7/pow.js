function pow2(x) {
  if (x === 1) {
    return 2;
  }
  return 2 * pow2(x - 1);
}

function pow(num, x) {
  if (x === 1) {
    return num;
  }
  return num * pow2(x - 1);
}

const res = pow2(3);
const res2 = pow(2, 3);
console.log(res,res2);
