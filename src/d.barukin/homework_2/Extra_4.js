var flatten = function (array){
    let result = [];
    for (let i = 0; i < array.length; i++) {
    result = result.concat(array[i]);
    }
    return result; 
}