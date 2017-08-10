var LL = {
    HEAD : null,
    add(data){
        if(this.HEAD==null) {
            this.HEAD={data:data,next:null};
            return;
        }
        var lastNode = this.traverse(this.HEAD);
        lastNode.next = {data:data,next:null};
    },
    traverse(node){
        if(node.next==null) return node;
        return this.traverse(node.next);
    },
    printer(node){
        console.log(node.data)
        if(node.next==null) return node;
        this.printer(node.next)
    },
    traverseReverse(node){
        if(node.next==null) return node;
        this.traverseReverse(node.next);
        console.log(node.data)
    },
    reverse(node){
        if(node.next==null){
            this.HEAD.next=null
            return this.HEAD=node;
        }
        this.reverse(node.next).next = node;
        return node;
    }
}

LL.add('A')
LL.add('B')
LL.add('C')
LL.add('D')

LL.printer(LL.HEAD) // > A B C D

LL.traverseReverse(LL.HEAD) //  D C B A

LL.reverse(LL.HEAD);  

LL.printer(LL.HEAD);