function pyramid(n) {
let array = []

  for (let i=0; i<n; i++){
    array.push(new Array(i+1).fill(1))
  }
  return array;
}