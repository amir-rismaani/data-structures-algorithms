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
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this
    }

    dequeue(){
        if(this.length === 0) return undefined

        const temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = this.first;
        }else{
            this.first = this.first.next;
            temp.next = null;
        }

        this.length--;
        return temp;
    }
} 


let myQueue = new Queue(4);
myQueue.enqueue(14);
myQueue.enqueue(6);
myQueue.enqueue(23);
myQueue.dequeue();
