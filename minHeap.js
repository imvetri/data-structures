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
    //private
    //keep sliding the new element upwards until it satisfies heap property. in our case, it shold be smaller than children
    swipeDownwards(childNode) {
        let parentValue = this.nodes[this.parent(childNode)],
            childValue = this.nodes[childNode],
            parentNode = this.parent(childNode);

        if (childValue < parentValue) {
            this.nodes[parentNode] = childValue; //swap parent and chidl
            this.nodes[childNode] = parentValue;
            this.swipeDownwards(childNode)
        }
    }
    //private
    swipeUpwards(node) {

    }
    //public
    insert(value) {
        this.nodes[++this.size] = value;
        this.swipeUpwards(this.size);
    }
    //public
    delete() {

    }
}