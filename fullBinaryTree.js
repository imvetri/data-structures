/*
    This is a simple array implementation of full binary tree
    USAGE: new FullBinaryTree(Size) -> sets the max size of the tree
    instance.addNode - adds a node
    instance.remove - to be implemented // delete should always remove the last node from the array
*/

class FullBinaryTree { 
    /*
        Q: problems with class?
        A: can define new class with existing name example
        class obj{
            constructor(){}
        }
        class obj{ //throws error obj already defined

        }

        Q: class get hoiseted ? 
        A: NO

        Q: whats the difference between class methods and function prototypes?
        A: function prototypes are enumerable while class methods are not.
    */
    constructor(maxSize) {
        this.MAX_SIZE = maxSize;
        this.size = 0;
        this.nodes = new Array(maxSize + 1) //Array representation of tree has index from 1
    }

    add(data) {
        if (this.size == this.maxSize)
            return;
        this.nodes[++this.size] = data;
    }

    delete() {
        this.nodes[this.size--]=undefined;
    }

    getChildren(node) {
        const children = [];
        if (this.getLeftChild()) {
            children.push(this.getLeftChild());
        }
        if (this.getRightChild()) {
            children.push(this.getRightChild());
        }
        return children;
    }

    getLeftChild(node) {
        return this.nodes[node * 2];
    }

    getRightChild(node) {
        return this.nodes[node * 2 + 1];
    }

    getParent(node) {
        return this.nodes[ Math.floor(node / 2)];
    }
}

const fullBinaryTree = new FullBinaryTree(3);
fullBinaryTree.add('a')
fullBinaryTree.add('b')
fullBinaryTree.add('c')
fullBinaryTree.nodes //["a","b","c"] //delete

fullBinaryTree.getLeftChild(1) //a
fullBinaryTree.getRightChild(1) //b

fullBinaryTree.delete()
fullBinaryTree.nodes // ["a","b"]