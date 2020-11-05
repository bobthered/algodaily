## Array Intersection - AlgoDaily Day 1

Alright, let's try something a tad bit more challenging.

Oftentimes, interviewers will test you on things that are deceptively easy. We saw this in Reverse a String, and will see more in future challenges. But sometimes you might get tested on a concept that, while a bit trivial, is really useful in day to day software engineering.

One of those things is array manipulation, or basically doing things to an array that creates some kind of transformation.

Prompt
Can you write a function that takes two arrays as inputs and returns to us their intersection? Let's return the intersection in the form of an array.

Note that all elements in the final result should be unique. Here's one example:

```
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2];

intersection(nums1, nums2);
// [2]
And here's another one:

const nums1 = [4,9,5];
const nums2 = [9,4,9,8,4];

intersection(nums1, nums2);
// [9, 4]
```

[Solution](/problems/001/index.js)
