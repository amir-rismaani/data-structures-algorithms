class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = this.first;
        this.length = 1;
    }

    enqueue(value){
        const newNode = new Node(value);

        if(this.length === 0){
            this.first = newNode;
            this.last = this.first;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }

        this.length++;
        return this
    }
} 


let myQueue = new Queue(4);
myQueue.enqueue(14);
myQueue;