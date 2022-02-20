function combine() {
    let object = {}
  
    for (var i = 0; i < arguments.length; i++) {
          for (let key in arguments[i]) {
            object[key] = object[key] ? object[key] + arguments[i][key]: arguments[i][key]
          }
    }
  
    return object;
  }