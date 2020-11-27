## Least Missing Positive Number - AlgoDaily Day 23

We have an unsorted array of integers such as the following:

[-2, -1, 0, 1, 3]

In the above example, the minimum number is -2 and the maximum is 3.

This means there is an expected range (defined as the collection of values between the minimum and maximum values) of [-2, -1, 0, 1, 2, 3] for the array.

But look at the example again:

[-2, -1, 0, 1, 3]
We're missing a number: 2. The smallest missing positive integer for our input array is 2.

Can you write a method that takes such an array and returns the first missing positive integer?

```
leastMissingPositive([1, 2, 3, 0])
// 4
```

In the above example, it is 4 since we already have 0 through 3. Have your code run in O(n) time with constant space.
