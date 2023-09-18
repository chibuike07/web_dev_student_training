// forOf, forin, foroflength
const names = ["princewill", "joy", "oge", "bucas", "ik", "bucas"];
const user = { name: "bucas", age: 4, isFair: true };
let stringData = "you are welcome";
// stringData = stringData.split(" ");
// console.log("stringData", stringData);

for (let indx = 0; indx < stringData.length; indx++) {
  let result = stringData[indx];
  //   console.log("result", result);
}
for (let indx = 0; indx < names.length; indx++) {
  let name = names[indx];
  //   console.log("name", name);
}

for (const val of names) {
  //   console.log("key", val);
}

for (const key in names) {
  console.log("key", key);
  const element = names[key];
  console.log("element", element);
}

for (const key in user) {
  console.log("keyObject", key);
  const element = user[key];
  console.log("element", element);
}
