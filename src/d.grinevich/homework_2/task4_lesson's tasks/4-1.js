function getCount(str) {
    let count = 0;
    for (const item of str) {
       
    
    if(item == "a" || item == "e" || item == "i" || item == "o" || item == "u"){
        count++;
    }
    }
    return count
    }
    console.log(getCount("abracadabra"));
        
        