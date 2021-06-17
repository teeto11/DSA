//CREATte a node class --> contains val,next
//create a linkedlist class -> contains head, tail , length of the list

class Node
{
    constructor(val)
    {
        this.val = val
        this.next = null
    }
}
class linkedlist
{
    constructor()
    {
        //linkedlist has a pointer to the head and tail in the list
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val)
    {
        //push accepts a value, and then adds it to the linkedlist
        //base case: if the value is the first in the list, its added as the head and tail
        //else its added as a node in the list
        //then we increment the list

        let node = new Node(val)
        if(this.length === 0)
        {
            this.head = node
            this.tail = node
        }else
        {
            this.tail.next = node
            this.tail = node
        }
        this.length ++
        console.log(this)
    }
    pop()
    {
        //pop means to remove an element at the end of an array
        //we just need to get the tail
        //we loop from the first to the last node keeping track of the current node which starts at the end
        //and the previous node which will initially be the current node
        //the current node keeps incrementing untill its null 
        //once we get to the end of the loop, the last current node is the last element so we return it
        //we set the previous node to be the new tail and the next node after the tail to be null 

        if(this.length === 0)
        {
            return undefined
        }
        let current = this.head
        let previous = current
        
        while(current.next)
        {
            previous = current
            current = current.next
        }

        this.tail = previous
        this.tail.next = null
        this.length --
        if(this.length === 0)
        {
            this.tail = null
            this.head = null
        }
        return current
    }
    shift()
    {
        //shift is removing the first node from the list
        // we know the first node is the head, so we just need to keep track of the node after the head, replace it to be the ned head
        //then return the previous head
        //then we decrement the length

        let current = this.head
        let next = current.next 

        if(this.length === 0)
        {
            return undefined
        }
        this.head = next
        this.length --
        if(this.length === 0)
        {
            this.tail = null
        }
        console.log(current)
    }
    unshift(val)
    {
        //unshift is bascially adding a node to the beginning of a linkedlist
        //base case: if there is no head , that means no tail , then the value becomes the head and tail
        //adding to a existing list means the current head will have to be kept track off so we can link it to the new head
        //then we increment the list
        let newnode = new Node(val)
        if(!this.head) 
        {
            this.head = newnode
            this.tail = this.head
        }
        else
        {
            let previousHead = this.head
            this.head = newnode
            this.head.next = previousHead
            console.log(this.head.next)
            this.length++
            console.log(this)

            
        }
    }
    get(index)
    {
        //basically we are trying to get a node from a particular position
        if(index < 0 || index > this.length) return null
        var counter = 0
        let current = this.head
        while(counter !== index)
        {
            current = current.next
            counter++

        }
         console.log(current)
         return current
    }
    set(value,index)
    {
        //set is basically assignig a value to a particular location in the linkedlist
        // we find the index , if not present return null
        //if index found, set the value of that node
       // let node = new node(val)
        let node = this.get(index)
        if(!index) return null
        node.val = value
       return true

    }
    insert(val,index)
    {
        // insert is placing a new node anywhere in the linkedlist
        if(index < 0 || index > this.length) return null
        if(index === this.length) return !! this.push(val)
        if(index === 0 ) return !! this.unshift(val)

        // we need to find the position for the insertion 
        let newNode = new Node(val)
        let prevNode = this.get(index - 1)
        if(!prevNode) return null
        
       //let target = prevNode.next
       newNode.next = prevNode.next
       prevNode.next = newNode
       console.log(this.get(2))
       
       
    }

    remove(index)
    {
        //to remove, we bascially get the index of the ode before the targeted node
        // then we keep track of the targeted node by assigning it to a variable
        //we also keep track of the node after the targetted node so we can join the prev node before the targeted node
        //and the node after it
        //we then return the targetted node and then reduce the length

        if(index < 0 || index > this.length) return null
        if(index === this.length) return !! this.pop(val)
        if(index === 0 ) return !! this.shift(val)

       let prevNode = this.get(index - 1)
        let target = prevNode.next
        let nodeAfterTarget = target.next

        prevNode.next = nodeAfterTarget
        this.length --
        console.log(target.val)
        return target
    }

    reverse()
    {
        // we want to change the order of the list 
        //we need to change the structure by making the current head the tail and vice versa
        // once we have done that, we move from the tail by assigning the next node as the current head to the next node
        // then next current node becomes the previous node
        
        let current = this.head
        this.head = this.tail
        this.tail = current
        let next;
        let prev = null
        for(let i = 0; i<this.length; i++)
        {
            next = current.next
            current.next = prev

            prev = current
            current = next

        }
        console.log(this)
    }
    
}
let list = new linkedlist()
   list.push(20)
   list.push(30)
   list.push(40)
   list.pop()
   list.pop()
   list.pop()
   //list.unshift("60")
   //list.get(2)
   //list.set(2,2)
   //list.insert(2,2)
   //list.remove(2)
   //list.reverse()