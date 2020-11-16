## Dollar Sign Deletion - AlgoDaily Day 13

You're given an array of strings containing alphabetical characters and certain $ characters. A $ represents a DELETE action whereby the character before it is deleted.

Each of these strings will be run through a method to operate on the \$ DELETE action. We want to find out if the final string is the same for all of them. Let's take an example:

```
const input = ["f$st", "st"]
isDollarDeleteEqual(input);
// true
// true because both become "st"
```

Given the below function signature, can you find a solution in O(n) time and constant space?

```
function isDollarDeleteEqual(arr) {
  return;
}
```
