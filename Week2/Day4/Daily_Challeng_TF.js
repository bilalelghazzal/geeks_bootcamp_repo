function alltrully (x,y,z){
    if(x==y && y==z && x==z){
        return true;
    }
    return false;
}
console.log(alltruthy(true, true, true));

// 2 eme methode :

function allTruthy(...args) {
    for (let arg of args) {
      if (!arg) return false;
    }
    return true;
  }

  console.log(allTruthy(true, 1, "hello")); 
  console.log(allTruthy(true, 0, "hello")); 

  console.log(alltruthy(true, true, true));