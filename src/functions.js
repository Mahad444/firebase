// functions 
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
// Path: src/index.js
// index.js
import { add, subtract, multiply } from './functions';
console.log(subtract(3, 2)); // 1
console.log(multiply(2, 3)); // 6
console.log('Hello World, This testing OF an APP')

if (module.hot) 
module.hot.accept();

// the trash recycle bin from deleted records
const trashIcon = document.querySelector('.trash-icon')
trashIcon.addEventListener('click', (e) => {
    const docId = e.target.getAttribute('data-id')
    const docRef = doc(db, 'books', docId)

    updateDoc(docRef, {
        deleted: true
    })
})