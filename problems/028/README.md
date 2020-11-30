## Swap Every Two Nodes in a Linked List - AlgoDaily Day 28

Write a recursive algorithm that swaps every two nodes in a linked list. This is often called a pairwise swap. For example:

```
/*
original list
1 -> 2 -> 3 -> 4

after swapping every 2 nodes
2 -> 1 -> 4 -> 3
*/
```

You may assume that the definition of a linked list node is:

```
function Node(val) {
  this.value = val;
  this.next = null;
}
```

The method will be invoked as such after setup:

```
const list = new Node(1);
list.next = new Node(2);
list.next.next = new Node(3);
list.next.next.next = new Node(4);

swapEveryTwo(list);
```

[Solution](./index.js)
