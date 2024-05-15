class Queue {
    constructor(values = []) {
        this.stack1 = values;
        this.stack2 = [];

        this.insertIntoStack2();
    }

    insertIntoStack2() {
        while(this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
    }

    enqueue(value) {
        this.stack1.push(value);
    }

    dequeue() {
        if(this.stack2.length == 0) {
            this.insertIntoStack2();
        }

        return this.stack2.pop();
    }

    peek() {
        if (this.stack2.length == 0) {
            this.insertIntoStack2();
        }

        return this.stack2[this.stack2.length - 1];
    }
}

const queue = new Queue([1,2,3,4,5]);
console.log(queue.dequeue())
console.log(queue.enqueue(6))
console.log(queue.enqueue(7))
console.log(queue.dequeue())
console.log(queue.peek());