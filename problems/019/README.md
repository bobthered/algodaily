## Fast Minimum In Rotated Array - AlgoDaily Day 19

We're given an array of integers that looks like the following:

[0, 1, 2, 3, 4, 5, 6, 7, 8]
Let's imagine we're an assembly line and we decide to shift some workers around.

Say we take our array, and rotate it at a random pivot so that the section after the pivot comes before. Let's put our pivot between 5 and 6:

[6, 7, 8, 0, 1, 2, 3, 4, 5]
See how it shifts?

Can you find the smallest element in O(log n) time? Assume that there are no repeat numbers.

Here are some other examples: given [4, 5, 1, 2, 3], we'd get 1.

In the event that there's a missing number in the sequence like [5, 6, 7, 0, 1, 2, 3] (where 4 isn't present), the output would still be 0.
