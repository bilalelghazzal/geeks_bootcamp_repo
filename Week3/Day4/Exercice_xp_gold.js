const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values);
});
// promise all well take all of these three promises and dispmay them 

function timesTwoAsync(x) {
    return new Promise(resolve => resolve(x * 2)); // return the var x multiple par 2 
  }
  
  const arr = [1, 2, 3];
  const promiseArr = arr.map(timesTwoAsync); // [2,4,6]

  Promise.all(promiseArr) /* Promise.all combines them, so the result will be [2, 4, 6] once all promises resolve. */ 
  
    .then(result => {
      console.log(result); 
    });
