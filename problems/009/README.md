## Implement a Hash Map - AlgoDaily Day 9

Arrays are amazing for looking up elements at specific indices as all elements in memory are contiguous, allowing for O(1) or constant time lookups. But often we don't, or can't, perform lookups via indices. Hash maps and hash tables are a way around this, enabling us to lookup via keys instead.

Can you implement the Map class from scratch? Only two methods are necessary-- get and set. Many programming languages have a built-in hash or dictionary primitive (like Javascript Objects and {} notation), but we don't want to use that for this exercise.

Note: Regular Javascript objects and the Map class are both simple key-value hash tables/associative arrays, with a few key differences:

A Map object can iterate through its elements in insertion order, whereas JavaScript's Objects don't guarantee order. In addition, Objects have default keys due to their prototype, and Maps don't come with default keys. Here's a good breakdown of the two. For the purpose of this exercise, let's assume the same functionality for both.

For the two methods you'll define:

get(key: string) should be given a key, and return the value for that key.
set(key: string, val: string) should take a key and a value as parameters, and store the pair.
Additionally, we've supplied the below hashing function hashStr. It tries to avoid collision, but is not perfect. It takes in a string value and returns an integer.

```
function hashStr(str) {
    let finalHash = 0;
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        finalHash += charCode;
    }
    return finalHash;
}

console.log(hashStr('testKey'))
```

Let's call our new class the Hashmap class, and use it like such:

```
const m = new Hashmap();
m.set('name', 'Jake');
console.log(m.get('name'));
```
