class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkeList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this
    }

    shift() {
        if(this.length === 0) return undefined;
        let temp = this.head;
        if(this.length === 1) {
            this.head = null;
            this.tail = this.head;
        } else {
            this.head = this.head.next;
            temp.next = null;
        }
        this.length--;
        return temp
    }
} 

let myLinkedList = new LinkeList(4);
myLinkedList.push(11);
myLinkedList.push(8);
myLinkedList.push(17);
myLinkedList.shift(); // remove first item