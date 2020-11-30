## Grab a Random Node - AlgoDaily Day 27

Given a linked list, can you write a method to get a random node within it? Let's assume you're given a random node generator. The linked list will have at least 2 nodes, and may look something like this:

1 -> 2 -> 3 -> 4

The odds of getting any number between 1 and 4 inclusive should be the exactly the same.

You have access to this definition of a Linked List node:

```
function Node(val) {
  this.val = val;
  this.next = null;
}
```
