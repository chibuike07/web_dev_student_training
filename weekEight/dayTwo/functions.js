// function is a block scope element that used to perform a particular action;

// function expression, function declaration  and arrow function

function addNums() {
  let result = 5 + 3;
  console.log("result", result);
}
addNums();

function multply(num1, num2) {
  console.log("num1", num1);
  let result = num1 * num2;
  console.log("result", result);
}

multply(5, 4);

const divideNum = function (num1, num2) {
  let result = num1 / num2;
  //   console.log("result", result);
  return result;
};

console.log("from divide", divideNum(10, 2));

const personName = (name) => name;
const calc = (num1, num2) => {
  let result = num1 * num2;

  return result;
};

const user = {
  firstName: "bucas",
  lastName: "ozor",

  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log("user.fullName()", user.fullName({ firstName: "princewill" }));
//two ways to return a function value =>  implicit and explicit;
console.log("personName", personName("John"));
