//define a simple custom module that
//  exports functions 
// for addition and multiplicatio

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

export { add, multiply };