
//Exercice1 
function compareToTen(num) {
    return new Promise((resolve, reject) => {
        if (num <= 10) {
            resolve("resolved");
        } else {
            reject("rejected");
        }
    });
}
//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//Exercicce 2: 

function func() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 4000);
    });
}

func().then(result => console.log(result));

//EXer 3 

const p1 = Promise.resolve(3);
p1.then(value => console.log('Resolved with:', value));

const p2 = Promise.reject("Boo!");
p2.catch(error => console.log('Rejected with:', error));





