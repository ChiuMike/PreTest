class StackNode{
	constructor(data,next){
		this.next = next;
		this.data = data;
	}
}

class Stack{
	constructor(){
		this.head = null
		this.length= 0
	}
  push(data){
    let node=new StackNode(data);
    node.next=null;
    this.head=node;
    this.length++;
  }
  size(){
    return this.length;
  }
  pop(){
    let result=this.head;
    this.head=this.head.next;
    this.length--;
    return result.data;
  }
 }

const myStack=new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
var a=myStack.pop() // 3
console.log(a);
var s=myStack.size()
console.log(s);