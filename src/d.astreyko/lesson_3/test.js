let age = prompt('Возраст?', 18);

let message = getMessage(age);

function getMessage(age) {
  if (age < 3) {
    return 'Здравствуй, малыш!';
  }
  if (age < 18) {
    return 'Привет!';
  }
  if (age < 100) {
    return 'Здравствуйте!';
  }
  return 'Какой необычный возраст!';
}

alert(message);


if(isAdmin || isAuthorised) {
  console.log('вы вошли');
}

if(isAdmin && isAuthorised) {
  console.log('вы вошли как админ');
}
