import { add, multiply } from './math.js';
import _ from 'lodash';



const numbers = [1, 2, 3, 4, 5];

const sumResult = add(10, 15); 
const productResult = multiply(4, 6); 

console.log('add : ', sumResult);
console.log('multiply :', productResult);

// on use lodash for example 
const productOfAll = _.reduce(numbers, multiply, 1);
console.log('Product of all numbers in array :', productOfAll);