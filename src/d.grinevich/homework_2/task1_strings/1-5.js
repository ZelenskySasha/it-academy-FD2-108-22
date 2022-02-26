function accum(str) {
	let newText = ""
for(i = 0 ; i < str.length; i++){
    
     newText += str[i].toUpperCase() + str[i].repeat(i).toLowerCase() + "-" 
}
  return newText.slice(0,newText.length-1)
}
 console.log(accum("cwAt"));
 console.log(accum("IAMSOHAPPY"));