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

    pop(){
        if(this.length === 0) return undefined;

        let temp = this.head;
        let prev = this.head;
        
        if(this.length === 1){
            this.head = null;
            this.tail = this.head;
        } else {
            while(temp.next){
                prev = temp;
                temp = temp.next
            }
            this.tail = prev;
            this.tail.next = null;  
        }

        this.length--;

        return temp
    }
} 


let myLinkedList = new LinkeList(4);
myLinkedList.push(11);
myLinkedList.push(8);
myLinkedList.push(17);
myLinkedList.pop(); //remove last item