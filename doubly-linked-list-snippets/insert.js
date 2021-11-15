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
    
    unshift(value){
        const newNode = new Node(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
        
    get(index){
        if(index < 0 || index >= this.length) return undefined
        let temp = this.head;
        if(index < this.length / 2){
            for(let counter = 0; counter < index; counter++){
                temp = temp.next;   
            }
        } else {
            temp = this.tail;
            for (let counter = this.length - 1; counter > index; counter--){
                temp = temp.prev;   
            }
        }

        return temp
    }

    insert(index, value){
        if(index === 0) return this.unshift(value);
        if(index === this.length - 1) return this.push(value);
        if(index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        let before = this.get(index - 1);
        let after = before.next;

        newNode.prev = before;
        after.prev = newNode;
        before.next = newNode;
        newNode.next = after;
        
        this.length++;
        return true;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList.push(11);
myDoublyLinkedList.push(18);
myDoublyLinkedList.push(5);
myDoublyLinkedList.insert(2);
