// object

const userProperties = { name: "bucas", course: "web dev", height: 1.7 };

// object can be accessed in two ways;
// dot notation/index notation

// let accessUser = userProperties.name;
// let accessUser = userProperties.height;
// console.log("accessUser", accessUser);

// using the index method

let accessUser = userProperties["name"];
console.log("accessUser", accessUser);

// adding props to object
userProperties.complexion = "fair";
userProperties["isReady"] = true;

// delete
// delete userProperties["name"];

// access object keys
let keysOfUser = Object.keys(userProperties);

// access object values
let valuesOfUser = Object.values(userProperties);

// set object properties to an array;
let userPropertiesArray = Object.entries(userProperties);
console.log("userPropertiesArray", userPropertiesArray);
console.log("valuesOfUser", valuesOfUser);
console.log("keysOfUser", keysOfUser);
console.log("userProperties", userProperties);
