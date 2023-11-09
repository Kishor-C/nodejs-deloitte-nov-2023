export class Stack { 
    // constructor to initialize the stack
    constructor() {
        this.items = [];
    }
    // add the element into the stack
    push(item) { 
        this.items.push(item);
    }
    // remove the top most element from the stack
    pop() {
        let item = null;
        if(this.items.length == 0) {
            throw 'Stack is empty';
        }
        else {
            item = this.items[this.items.length - 1];
            this.items.splice(this.items.length - 1, 1);
            return item;
        }
    }
    // clear all the elements
    clear() {
        this.items = [];
    }
    // return all the elements
    getItems() {
        // throw error if stack is empty
        if(this.items.length == 0) {
            throw 'Stack is empty';
        } else {
            return this.items;
        }
    }
}