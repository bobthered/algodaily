## Binary Tree Inorder Traversal - AlgoDaily Day 10

Can you write a function to traverse a binary tree in-order, and print out the value of each node as it passes?

```
  4
   \
    5
   /
  6
```

The example would output [4, 6, 5] since there is no left child for 4, and 6 is visited in-order before 5.

The definition of a tree node is as follows:

```
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
```

Follow up: you'll likely get the recursive solution first, could you do it iteratively?

[Solution](./index.js)
