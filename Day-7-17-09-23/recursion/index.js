class Stack {
    constructor() {
        this.items = [];
    }

    // Add element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return the top element from the stack
    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
        return null;
    }

    // Return the top element of the stack without removing it
    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
        return null;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the number of elements in the stack
    size() {
        return this.items.length;
    }
}

// Function to reverse elements of a given stack
function reverseStack(stack) {
    let auxStack = new Stack();
    while (!stack.isEmpty()) {
        auxStack.push(stack.pop());
    }
    return auxStack;
}

// Example usage
let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.log("Original stack:", stack.items); // [1, 2, 3, 4]

let reversedStack = reverseStack(stack);
console.log("Reversed stack:", reversedStack.items); // [4, 3, 2, 1]
