/*
    Implemented using arrays
*/

class Minheap {
    constructor(maxSize) {
        this.maxSize = maxSize + 1; //since it is array representation 0-index will be ignored. hence additional space
        this.size = 0;
        this.nodes = new Array(this.maxSize);
    }
    //private
    parent(node) {
        return this.nodes[Math.floor(node / 2)];
    }
    //private
    children(node) {
        return [this.nodes[node * 2], this.nodes[node * 2 + 1]]
    }

    getRoot() {
        return this.nodes[1];
    }
    getLastNode() {
        return this.nodes[this.size--];
    }
    //private
    //keep sliding the new element upwards until it satisfies heap property. in our case, it shold be smaller than children
    swipeUpwards(childNode) {
        let parentValue = this.nodes[this.parent(childNode)],
            childValue = this.nodes[childNode],
            parentNode = this.parent(childNode);

        if (childValue < parentValue) {
            this.nodes[parentNode] = childValue; //swap parent and chidl
            this.nodes[childNode] = parentValue;
            this.swipeUpwards(childNode)
        }
    }
    //private
    //usualy after removing a min element
    swipeDownwards(node) {
        let parentValue = this.nodes[node],
            minChildValue = Math.min(...this.children[node]),
            minChildIndex = this.nodes[node*2] == minChildValue ? node*2 : node*2+1; //very confusing ?
        if (minChildValue < parentValue) {
            this.nodes[node] = minChildValue;
            this.nodes[minChildIndex] = parentValue;
            this.swipeDownwards(minChildIndex)
        }
    }
    //public
    insert(value) {
        this.nodes[++this.size] = value;
        this.swipeUpwards(this.size);
    }
    //public
    //remove the root, creates a empty node,
    //remove the last node from the tree
    //place it in the empty
    //swipeDownwars untill heap property is maintained
    //return the min
    deleteMin() {
        let min = this.getRoot();
        //set root with lastNode
        this.nodes[1] = this.getLastNode();
        swipeDownwards(1);
        return min;
    }
}

//test for following input
//insert
var minheap = new Minheap(30);
minHeap.insert(13);
minHeap.insert(21);
minHeap.insert(16);
minHeap.insert(24);
minHeap.insert(31);
minHeap.insert(19);
minHeap.insert(68);
minHeap.insert(65);
minHeap.insert(26);
minHeap.insert(32);
//twist in plot
minHeap.insert(14);
//delete
minheap.deleteMin();
