// exercice 2 
const addTo = x => y => x + y; // arrow funct qui retourne qutre prends en para x et autre prend y  
const addToTen = addTo(10); //affecter 10 a addTo 
addToTen(3);  // 10 + 3 
// exrc 1 
let landscape = function() {

    let result = "";
    function a (x) {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
     function b(x) {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
    a (x);
    b (y);
   }
landscape();

   
//EXE 3 
const curriedSum = (a) => (b) => a + b
curriedSum(30)(1)  // it return 31 

//EXE 4 : it return 17 
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)  // it gonna return 16

