const names = ["princewill", "joy", "oge", "bucas", "ik", "bucas"];

let findIndex = names.indexOf("bucas");
console.log("findIndex", findIndex);

let findIndexOfBucas = [];
names.forEach((val, index) => {
  if (val.includes("bucas")) {
    findIndexOfBucas.push(index);
  }
});
console.log("findIndexOfBucas", findIndexOfBucas);

names.forEach((val) => {
  console.log("val", val);
});

const getSubString = names.slice(0, 4);
console.log("getSubString", getSubString);

const getObject = () => {
  let user = { name: "bucas" };
  return user;
};

console.log("getObject(", getObject());

const declareMultipleUsers = [
  {
    name: "bucas",
    age: 20,
    isFair: true,
  },
  {
    name: "john",
    age: 57,
    isFair: false,
  },
  {
    name: "oge",
    age: 10,
    isFair: true,
  },
];

console.log("declareMultipleUsers", declareMultipleUsers);
