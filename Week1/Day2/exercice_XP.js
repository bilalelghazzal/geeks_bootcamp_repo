const people = ["Greg", "Mary", "Devon", "James"];
people.splice(0,1,"Greg");
people.splice(3,1,"James");
people.push("Bilal"); // add "Bilal" to the end of the array
console.log(people.indexOf("Mary"));

people.slice(0,5);
console.log(people);

console.log(people.indexOf("Foo"));  // return -1 because "Foo" is not in the array

const last = people[people.length - 1]; 

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);

}
//// IF DEAVON EXIT 
for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Deavon"){
        break;
    }
}

//Exercie 2


const colors = ["blue", "red", "green", "purple", "yellow"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i + 1} choice is ${colors[i]}`);
}
//Exercie 3

/*let userNum;

do {

    let input = prompt("Please enter a number:");
    userNum = Number(input);
    console.log("Value:", userNum, "| Type:", typeof userNum);

} while (userNum < 10); 

alert("Finally! A big number: " + userNum); */



// exercice 4 
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1] +building.numberOfRoomsAndRent.dan[1] );
//Exercie 5
const family = {
    name: "Alice",
    age: 35,
    city: "London",
    job: "Engineer"
};

// Log all the keys of the family object
for (let key in family) {
    console.log(key);
}

// Log all the values of the family object
for (let key in family) {
    console.log(family[key]);
}

//exercie 6 
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
  }
  for(let key in details){
    console.log(key+details[key])
  }

//exercie 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let secret =[];
for (let i = 0; i < names.length; i++) {
    secret.push(names[i][0]);
}
secret.sort();
let societyName = secret.join('');// in alphabetic ordr
console.log(societyName);




