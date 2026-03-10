[1, 2, 3].map(num => {
    if (typeof num === 'number') return num * 2;
    return ;
  });
//   output is [2,4,6]

[[0, 1], [2, 3]].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2],
  );
// output is : [1, 2, 0, 1, 2, 3] 

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
//output  value of i is : [0,1,2,3,4,5] 


// Exercice 4  : 

const array = [[1],[2],[3],[[[4]]],[[[5]]]];
const result = array.flat(2);
// [1, 2, 3, [4], [5]]

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const result1 = greeting.map(arr => arr.join(" "));
// ["Hello young grasshopper!", "you are", "learning fast!"]

const sentence = greeting.map(arr => arr.join(" ")).join(" ");
// 'Hello young grasshopper! you are learning fast!'

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const result2 = trapped.flat(Infinity);
// [3]