/* return phone num */

function phoneNumConvert(phone){
    let format = "(xxx) xxx-xxxx";
    for(let i =0; i<phone.length; i++){
        format = format.replace("x", phone[i]);
    }
    return format;
}    
console.log(phoneNumConvert([8,7,3,4,5,6,7,8,9, 1]));


/* Square Every Digit */
function square(num){
    let result = "";
    let newNum = num.toString();
    for(let i = 0; i<newNum.length; i++){
        result = result + (newNum[i]**2).toString();
    }
    return Number(result);
    

}
console.log(square(9119));