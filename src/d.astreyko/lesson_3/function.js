
function generateText() {
  console.log('generate');
  return 'random text';
}
function showMessage(...args) {
  console.log(arguments);
  console.log(args);
  const [from, text] = args;
  console.log((from + ': ' + text));
}

showMessage("Аня");
showMessage("Аня" , '');
showMessage("Аня" , null);
showMessage("Аня" , undefined);
showMessage("Аня", 'privet');


