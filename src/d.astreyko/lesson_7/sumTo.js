function sumTo(n) {
  if (n === 1) {
    return 1;
  }
  return n * sumTo(n - 1);
}

sumTo(4); // 1 +2 +3 +4
sumTo(10); // 1 +2 +3 +4 +5 +6 +7+8+9+10
