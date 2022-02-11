/*
let answer = confirm('Подпишись!!');
while (answer === false) {
  answer = confirm('Подпишись!!');
}

alert('Спасибо')*/


while (true) {
  const answer = confirm('Подпишись!!');
  if(answer) {
    break;
  }
}

alert('Спасибо')
/*
let answer;
let count = 0;
do {
  answer = confirm('Подпишись!!');
  count++;
} while (answer === false);

alert('Спасибо' + count);*/

/*let count = 0;
for (let answer = false; answer === false; count++) {
  answer = confirm('Подпишись!!');
}
alert(count);
alert(answer);*/

