function combine(objA, objB) {
let objC = {};
    for (key in objA) {
        if (objB.hasOwnProperty(key)) {
		    objC[key] = objA[key] + objB[key];
        } else {
  	        objC[key] = objA[key];
        }
    }
    for (key in objB) {
        if (!objC.hasOwnProperty(key)) {
            objC[key] = objB[key];
        }
    }
    return objC
}