let myArray = [11, 3, 23, 7];

myArray.push(17);
// [11, 3, 23, 7, 17] => O(1) => because we do not have to reindex...

myArray.pop();
// [11, 3, 23, 7] => O(1) => because we don't have to reindex...

myArray.shift();
// [3, 23, 7] => O(n) => because we have to reindex all items...

myArray.unshift(11);
// [11, 3, 23, 7] => O(n) => because we have to reindex all items...

myArray.splice(1, 0, "Hi");
// 1 means index of 1.
// 0 means we'er not going to remove any items.
// [11, "Hi", 3, 23, 7] => O(n) => because we have to reindex all items...
// if putting that in the middle => O(1/2 n) => drop constant => O(n)

myArray.splice(1, 1);
// [11, 3, 23, 7] => O(n) => because we have to reindex all items...


myArray.find(element => element === 7) 
// O(n) => because we have to iterate all items

let item = myArray[3]
// O(1) => indexes allow you to go directly to that place in memory