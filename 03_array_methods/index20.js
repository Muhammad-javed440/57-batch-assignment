"use strict";
// Q20. Write a function to find and return the smallest number in an array 
// of integers.
Object.defineProperty(exports, "__esModule", { value: true });
let array6 = [4, 5, 7, 3, 8, 9, 1];
function findSmallest(array6) {
    if (array6.length === 0) {
        return null;
    }
    let smallest = array6[0];
    for (let i = 1; i < array6.length; i++) {
        if (array6[i] < smallest) {
            smallest = array6[i];
        }
    }
    return smallest;
}
console.log(findSmallest(array6));
