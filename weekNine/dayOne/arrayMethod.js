// methods of arrays
// at, length, push, shift, unshift, slice, splice,includes, indexOf, find, findIndex, sort, forEach, filter, reduce,

const animalList = ["dog", "cat", "horse", "fish", "cat"];
const numbers = [1, 3, 2, 5, 4];

// let result = animalList.at(3);
// console.log("result :>> ", result);

// console.log("animalList :>> ", animalList.length);

// let newAnimal = animalList.push("goat");
// let newAnimal = animalList.push("goat", "elephant");
// console.log("animalList :>> ", animalList);
// console.log("newAnimal :>> ", newAnimal);

// let removeFromFront = animalList.shift();

// console.log("addFromFront :>> ", removeFromFront);
// console.log("animmalList :>> ", animalList);

// let addFromFront = animalList.unshift("ants");
// console.log("addFromFront :>> ", addFromFront);
// console.log("animalList :>> ", animalList);

// let sliceItems = animalList.slice(0, 2);
// console.log("sliceItems :>> ", sliceItems);
// console.log("animalList :>> ", animalList);

// let spliceItem = animalList.splice(1, 1);
// let spliceItem = animalList.splice(1, 1, "ants");
// console.log("spliceItems :>> ", spliceItem);
// console.log("animalList :>> ", animalList);

// let result = animalList.includes("dog");
// let result = animalList.includes("cat", 2);
// console.log("animalList :>> ", animalList);

// console.log("result :>> ", result);

// let idx = animalList.indexOf("cat");
// console.log("animalList :>> ", animalList);
// console.log("idx :>> ", idx);

// let findItem = animalList.find((item) => {
//   console.log("item :>> ", item);

//   return item === "cat";
// });
// console.log("animalList :>> ", animalList);
// console.log("findItem :>> ", findItem);

// let findIndx = animalList.findIndex((item) => {
//   console.log("object :>> ", item);

//   return item === "horse";
// });

// console.log("findIndx :>> ", findIndx);

// let sortItems = animalList.sort();
// let sortNum = numbers.sort();
// console.log("sortNum :>> ", sortNum);
// let sortItems = numbers.sort((a, b) => {
//   // descending order
//   return b - a;
// });

// let sortItems = numbers.sort((a, b) => {
//     // ascending order
//   return a - b;
// });

// console.log("sortItems :>> ", sortItems);
// let sortStrings = animalList.sort((a, b) => {
//     // ascending order
//   return a.localeCompare(b);
// });
// let sortStrings = animalList.sort((a, b) => {
//   // descending order
//   return b.localeCompare(a);
// });

// const sortByOddNumber = numbers.sort((a, b) => {
//   return (b % 2) - (a % 2);
// });

// const sortByEvenNumber = numbers.sort((a, b) => {
//   return (a % 2) - (b % 2);
// });

// // const sortByOddNumber = numbers.sort((a, b) => {
// //   return (b % 2) - (a % 2);
// // });

// console.log("sortByEvenNumber :>> ", sortByOddNumber);

// console.log("animalList :>> ", animalList);

// const result = animalList.forEach((value, index, a) => {
//   console.log("value :>> ", value);
//   //   console.log("index :>> ", index);
//   //   console.log("a :>> ", a);
// });

// const filterItems = animalList.filter((v) => v === "cat");
// const filterItems = animalList.filter((v, i) => i <= 2);
// console.log("filterItems :>> ", filterItems);

const accessArray = numbers.map((v, i, a) => {
  console.log("v :>> ", v);

  return v * 2;
});

console.log("accessArray :>> ", accessArray);

const createObjFromArray = numbers.reduce((store, curValue, curIdx, arr) => {
  //   console.log("store :>> ", store);
  store[curValue] = curIdx;

  return store;
}, {});

console.log("createObjFromArray :>> ", createObjFromArray);

// const calc = numbers.reduce((store, curValue, curIdx, arr) => {
//   console.log("store :>> ", store);
//   return store + curValue;
// }, 0);

console.log("numbers :>> ", numbers);
// console.log("calc :>> ", calc);
