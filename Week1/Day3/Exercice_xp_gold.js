//1

function isBlank(str) {
    return str.trim() === "";
  }
  
  console.log(isBlank(''));    
  console.log(isBlank('abc'));
  console.log(isBlank('   '));

  function abbrevName(str) {
    let words = str.split(" ");
    return words[0] + " " + words[1][0].toUpperCase() + ".";
  }

console.log(abbrevName("hello world"));


//2
function swapCase(str) {
    return str.split("")
              .map(char => {
                if (char === char.toUpperCase()) {
                  return char.toLowerCase();
                } else {
                  return char.toUpperCase();
                }
              })
              .join("");
  }
  
  console.log(swapCase("Hello World")); 

//3
function swapCase(str) {
    return str.split("")
              .map(char => {
                if (char === char.toUpperCase()) {
                  return char.toLowerCase();
                } else {
                  return char.toUpperCase();
                }
              })
              .join("");
  }
//4
function isOmnipresent(arr, value) {
    return arr.every(subArr => subArr.includes(value));
  }