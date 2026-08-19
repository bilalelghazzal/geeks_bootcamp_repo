let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Arrow function to display all fruits from groceries object
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

// Arrow function to clone the client variable
const cloneGroceries = () => {
    // user is a copy of client (primitive type: string, so it's passed by value)
    let user = client;
    // Change client variable
    client = "Betty";

    console.log("user:", user);   
    console.log("client:", client); 
};

