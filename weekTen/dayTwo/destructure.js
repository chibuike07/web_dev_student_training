const animal = ["dog", "cat", "goat"];
const user = { name: "John", age: 34, gender: "male" };

const arrayObject = [user, user];
// array desctructure

console.log("arrayObject", arrayObject);
const [firstItem, , thirdItem] = animal;

console.log("firstItem", firstItem);
console.log("thirdItem", thirdItem);

const { gender } = user;
// const gender = "male"
// console.log("name", name);
console.log("gender", gender);

const [{ name }] = arrayObject;
console.log("name", name);

for (const key in user) {
  const element = user[key];
  console.log("element", element);
}

// spread ..., rest

// rest
const { age, ...otherUserProps } = user;
console.log("age", age);
console.log("otherUserProps", otherUserProps);

// clone spread
const obje = { ...user, isFair: true, animals: animal };
console.log("obje", obje);
const maxNum = [5, 3, 1];
let arr = [...animal, "map", ...["boy", "girl"]];
console.log("arr", arr);
let result = Math.max(...maxNum);
let minResult = Math.min(...maxNum);
console.log("result", result);
console.log("minResult", minResult);
