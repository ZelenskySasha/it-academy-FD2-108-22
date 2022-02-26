function getMiddle(s){
    if(s.length % 2 == 0){
        let index = (Math.floor(s.length / 2));
        return s[index-1] + s[index]; 
    }
    if (s.length % 2 != 0){
        let index = (Math.floor(s.length / 2));
        return s[index];
    }

}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));