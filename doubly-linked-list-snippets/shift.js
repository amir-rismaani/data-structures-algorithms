class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    shift(){
        if(this.length === 0) return undefined;
        const temp = this.head;

        if(this.length === 1){
            this.head = null
            this.tail = this.head
        }else{
            this.head = this.head.next
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList.push(11);
myDoublyLinkedList.push(11);
myDoublyLinkedList.push(18);
myDoublyLinkedList.shift();

