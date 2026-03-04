
/*function displayNumbersDivisible() {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}
displayNumbersDivisible();  */   // please remove comments if u want to run this 


// bonus : 



function displayNumbersDivisible(divisor) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}

displayNumbersDivisible(3);
displayNumbersDivisible(45);

// exercice 2 : 

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

const shoppingList = ["banana", "orange", "apple","blueberry","pear"];

function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            let price = prices[item];
            total += price;
            // Bonus: decrease the item's stock by 1
            stock[item] -= 1;
        }
    }
    return total;
}

console.log("Total bill:", myBill());


//exerci 3 : 



function changeenough(price,coinarray){
    const coin=[0.25, 0.10, 0.05, 0.01];
    let total=0;
    for (let i=0;i<coinarray.length;i++){
        total+=coin[i]*coinarray[i];
    }
    return total>=price ;
}
console.log(changeenough(10.00, [2, 1, 0, 0]));
console.log(changeenough(0.75, [0,0,20,5]));


//exercice 4 

function hotelCost() {
    const pricePerNight = 140;
    let nights;

    while (true) {
        nights = prompt("How many nights would you like to stay in the hotel?");
        if (nights === null || isNaN(nights)) {
            continue;
        }
        nights = Number(nights);
        if (!isNaN(nights) && nights > 0) {
            break;
        }
    }
    return console.log(nights * pricePerNight);
}
hotelCost();

function rentalCarCost(){
   // It should ask the user for the number of days they would like to rent the car.
   const carrent=40;
   let days;
   while(true){
   days=prompt("how many days you want rent this  car ? :");
   if (days==null || isNaN(days)){
    continue;
   }
   days=Number(days);
   let total=carrent*days;
   if(!isNaN(days)&& days>10){
    total=-total*0.05;
   }
   console.log("the price is"+ total);
   return total;
   }
}
rentalCarCost();



function planeRideCost() {
    let destination;
  
    while (true) {
      destination = prompt("What is your destination?");
      
      // 1. check if input is valid (not null, not empty, IS a string)
      if (destination==null || destination==""){
      // 2. if valid → break out of the loop
      break;
    }
    if (destination.toLowerCase() === "london") {
        return 183;
      } else if (destination.toLowerCase() === "paris") {
        return 220;
      } else {
        return 300;
      }}}

console.log(planeRideCost());


function totalVacationCost() {
    // 1. call each function and store their return values
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car =   rentalCarCost();
  
    // 2. add them all together
    let total = hotel+plane+car;
  
    // 3. display and return the result
    console.log("The car cost: $" + car + 
                ", the hotel cost: $" + hotel + 
                ", the plane tickets cost: $" + plane);
    // return the total
    return total;
  }
  
  // 4. call the function
console.log(totalVacationCost());

//exercice 5 : 

//part 1 

    let div = document.getElementById("container");
    console.log(div);

    let li=document.querySelectorAll(".list");

    list[0].children[1].textContent = "Richard";


    document.querySelectorAll("ul")[1].children[1].remove();

    let uls = document.querySelectorAll("ul");
    for (let i = 0; i < uls.length; i++) {
        let firstLi = uls[i].querySelectorAll("li")[0];
        firstLi.textContent="Bilal"
    }
//part 2 

document.getElementsByClassName(".list").cl
uls.forEach(ul => ul.classList.add("student_list"));

ul[0].classList.add("university","attendance");

    // ---- PART 3 ----
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";


uls[1].children[2].style.display = "none";


uls[0].children[1].style.border = "1px solid black";


document.body.style.fontSize = "20px";


  // bons
if (div.style.backgroundColor === "lightblue") {
    alert("Hello Bilal and Richard");}


//exercice 6 
    // pt2
    let div = document.getElementById("navBar");
    div.setAttribute("id", "socialNetworkNavigation");
    
    // pt3
    let newLi = document.createElement("li");
    let text = document.createTextNode("Logout");
    newLi.appendChild(text);
    document.querySelector("ul").appendChild(newLi);
    
    // pt4
    let ul = document.querySelector("ul");
    let firstLi = ul.firstElementChild;
    let lastLi = ul.lastElementChild;
    
    console.log(firstLi.firstElementChild.textContent);
    console.log(lastLi.firstElementChild.textContent);  


//exercice 7 : 
let table = document.body.firstElementChild;

    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].cells[i].style.backgroundColor = "red";
    }
