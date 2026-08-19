//exercice1
let numbers = [123, 8409, 100053, 333333333, 7];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] % 3 === 0);
}
//exercic 2 : 

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
};

let studentName = prompt("What is your name?");
if (studentName in guestList) {
    console.log(`Hi! I'm ${studentName}, and I'm from ${guestList[studentName]}.`);
} else {
    console.log("Hi! I'm a guest.");
}

  


//exercice 3
let age = [20,5,12,43,98,55];
let sum=0;
for (let i =0; i<age.length-1;i++){
    sum+=age[i];
}
console.log(sum);