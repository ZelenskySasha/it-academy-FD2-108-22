let objA = {
    a: 10,
    b: 20,
    c: 30,
}
let objB = {
    d: 4,
    e: 5,
    f: 6,
}

function combine(...End) {
    let resultObj = {};
    let str = "";
    let arr = [];
    let newarr = [];
    n = 0;
    for (let key in End) {
        str = str + JSON.stringify(End[key]);
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] != "{" && str[i] != "}" && str[i] != "," && str[i] != ":") {
            arr[n] = str[i];
            n++;
            //console.log(str[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i]);
        if (arr[i] > 0 && arr[i] < 10) {
            newarr[n] = arr[i];
            n++;
            //console.log("стока");
        }

    }

    return newarr;
}

console.log(JSON.stringify(combine(objA, objB)));