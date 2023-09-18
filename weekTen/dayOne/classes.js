function Student({ name, code }) {
  this.name = name;
  this.code = code;
}

// its start with an uppercase letter;
// it uses the this keyword;
// it is called with the new keyword

Student.prototype.greeting = function () {
  return `hi ${this.name} your statecode is ${this.code}`;
};

function Teachers({ name, subject }) {
  Student.call(this, { name });
  this.subject = subject;
}

Teachers.prototype = Object.create(Student.prototype);

let teacherOne = new Teachers({ name: "princewill", subject: "web dev" });
console.log("teacherOner", teacherOne);
console.log("teacherOne", teacherOne.greeting());

const studentOne = new Student({ name: "bucas", code: 345 });
const studentTwo = new Student({ name: "john", code: 543 });

console.log("studentOne", studentOne);
console.log("studentOne.greeting", studentOne.greeting());
console.log("studentTwo", studentTwo);
console.log("studentTwo.greeting", studentTwo.greeting());
