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

    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let prev = null;
        let next = temp.next;

        for(let index = 0; index < this.length; index++){
            next = temp.next;
            temp.next = prev;
            prev = temp;
            temp = next;
        }
        
        return this
    }
} 

let myLinkedList = new LinkeList(4);
myLinkedList.push(11);
myLinkedList.push(8);
myLinkedList.push(17);
myLinkedList.reverse() // remove items/nodes of linked list