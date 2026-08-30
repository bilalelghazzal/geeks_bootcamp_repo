// #1
/**
 * funcOne :changes its value if greater than 1, and alerts the final value.
 */
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); 
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2
let b = 0;

//  funcTwo assigns the value 5 to the global variable b.
 
function funcTwo() {
    b = 5;
}

/*
  funcThree alerts the value of a (should be undefined or reference error if a is not defined globally).
 */
function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree()
funcTwo()
funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ? it will not change its value 


//#3
/**
 * funcFour creates a global variable a by attaching it to the window object with the value "hello".
 */
function funcFour() {
    window.a = "hello";
}

/**
 * funcFive alerts the value of the (possibly global) variable a.
 */
function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let c = 1;
/**
 * funcSix demonstrates block scoping: declares a local variable c (shadowing the global c), assigns it "test", and alerts it.
 */
function funcSix() {
    let c = "test";
    alert(`inside the funcSix function ${c}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//#5
let d= 2;
if (true) {
    let d = 5;
    alert(`in the if block ${d}`);
}
alert(`outside of the if block ${d}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?  the function will not change the value of d bcs its const 


/**
 * Exercie 2 
*/

function winBattle(){
    return true;
}
const winBattle = () => true;

const experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// exercice 3 

const check = (value) => typeof value === 'string';
// exercice 4 
 //Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum

const sum =(a,b) => a+b; 
// exer 5

function kgToGramsDeclaration(kg) {
    return kg * 1000;
}
console.log(kgToGramsDeclaration(5)); // 5000

// Function expression
const kgToGramsExpression = function(kg) {
    return kg * 1000;
}
console.log(kgToGramsExpression(8)); // 8000

// The difference is that function declarations are hoisted and can be used before declaration; expressions are not hoisted.

// Arrow function (one line)
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(12)); // 12000

// Exercise 6

(function(numChildren, partnerName, location, jobTitle) {
    const message = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids.`;
    document.body.innerHTML += `<p>${message}</p>`;
})(3, "Alex", "Paris", "Web Developer");


function add (userName) {
    // Find the navbar element
    const navbar = document.querySelector('nav');
    if (!navbar) return;

    // Create container
    const userDiv = document.createElement('div');

    // Profile picture (placeholder image)
    const profilePic = document.createElement('img');
    // User name
    const nameSpan = document.createElement('span');
    nameSpan.textContent = userName;
    // Append to userDiv
    userDiv.appendChild(profilePic);
    userDiv.appendChild(nameSpan);

    // Add to navbar
    navbar.appendChild(userDiv);

}


// Exerice 8 : 



function makeJuice(size) {
    // This outer function receives the size argument
    function addIngredients(ing1, ing2, ing3) {
        const message = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
        document.body.innerHTML += `<p>${message}</p>`;
    }
    // Call the inner function once, with some sample ingredients
    addIngredients("apple", "carrot", "ginger");
    console.log(`One ${size} juice coming up!`);
}

// Enhanced makeJuice 

function makeJuice(size) {
    // Step 1: Create an empty ingredients array
    const ingredients = [];

    // Step 2: Modify addIngredients to push ingredients into the array
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    // Step 3: Create displayJuice inner function
    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
        document.body.innerHTML += `<p>${message}</p>`;
    }


    addIngredients("apple", "carrot", "ginger");
    addIngredients("orange", "celery", "lemon");

    displayJuice();
}
makeJuice("large");


