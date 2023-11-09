import { Stack } from "./Stack.js";

// creating a stack object
let stack = new Stack();
// push some elements
stack.push(20);
stack.push(30);
stack.push(15);

console.log(stack);
console.log('-------- iteration ------')
stack.getItems().forEach(value => console.log(value));
console.log('------- pop ------')
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
