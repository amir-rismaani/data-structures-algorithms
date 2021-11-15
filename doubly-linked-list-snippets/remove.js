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

    pop(){
        if(this.length === 0) return undefined;

        const temp = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = this.head;
        }else{
          this.tail = this.tail.prev;
          this.tail.next = null;
          temp.prev = null;
        }

        this.length--;
        return temp;
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

    remove(index){
        if(index == 0) return this.shift();
        if(index == this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        const temp = this.get(index);

        temp.prev.next = temp.next;
        temp.next.prev = temp.prev;

        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }
}

let myDoublyLinkedList = new DoublyLinkedList(7);
myDoublyLinkedList.push(11);
myDoublyLinkedList.push(18);
myDoublyLinkedList.push(5);
myDoublyLinkedList.remove(2);