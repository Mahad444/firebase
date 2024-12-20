// functions 
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
// Path: src/index.js
// index.js
import { add, subtract, multiply } from './functions';
console.log(add(1, 2)); // 3
console.log(subtract(3, 2)); // 1
console.log(multiply(2, 3)); // 6
console.log('Hello World')

if (module.hot) {
    module.hot.accept();
}