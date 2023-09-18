class Student {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  greeting(user) {
    return user === "s"
      ? `hi ${this.name} my code is ${this.code}`
      : user === "t" && `hi ${this.name} my subject is ${this.subject}`;
  }
}

class Teachers extends Student {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

const studentOne = new Student("bucas", 234);
// console.log("studentOne", studentOne);
// console.log("studentOne.greeting()", studentOne.greeting("s"));

// const teacherOne = new Teachers("princewill", "web dev");
// console.log("teacherOne", teacherOne);
// console.log("teacherOne.greeting()", teacherOne.greeting("t"));

const addStudent = () => {
  const student = document.querySelector("#student");
  const studentCode = document.querySelector("#student_code");
  const student_ = new Student(student.value, studentCode.value);

  console.log("student_", student_);
  console.log("student_.greeting(", student_.greeting("s"));
};

const addTeacher = () => {
  const teacher = document.querySelector("#teacher");
  const teacherSubject = document.querySelector("#teacher_subject");
  const teacher_ = new Teachers(teacher.value, teacherSubject.value);
  console.log("teacher_.greeting()", teacher_.greeting("t"));

  console.log("teacher_", teacher_);
};
