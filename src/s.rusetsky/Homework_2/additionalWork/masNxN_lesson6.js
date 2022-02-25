function quadArr(n){
var mas = [];
let count = 1;
let defNumber = 0;

for (var i = 0; i < n; i++){
    mas[i] = [];
    for (var j = 0; j < n; j++){
        mas[i][j] = defNumber;
    }
  }
  
  for (let j = 0; j < n; j++) {
            mas[0][j] = count;
            count++;
        }
        for (let i = 1; i < n; i++) {
            mas[i][n - 1] = count;
            count++;
        }
        for (let j = n - 2; j >= 0; j--) {
            mas[n - 1][j] = count;
            count++;
        }
        for (let i = n - 2; i > 0; i--) {
            mas[i][0] = count;
            count++;
        }
  
  let c = 1;
  let d = 1;
  
   while (count < n * n) {

            while (mas[c][d + 1] == 0) {
                mas[c][d] = count;
                count++;
                d++;
            }
            
            while (mas[c + 1][d] == 0) {
                mas[c][d] = count;
                count++;
                c++;
            }

            while (mas[c][d - 1] == 0) {
                mas[c][d] = count;
                count++;
                d--;
            }

            while (mas[c - 1][d] == 0) {
                mas[c][d] = count;
                count++;
                c--;

            }
        }
  
  for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (mas[i][j] === 0) {
                    mas[i][j] = count;
                }
            }
        }
  
  return mas;
}