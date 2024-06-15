console.log("Welcome to Node.js");

const numbers = [1, 2, 3, 4, 5];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log("The sum is:", sum);

const students = [{ name: "Alice", age: 20, grade: "A" }];
function printStudent(student) {
  console.log(
    `Name: ${student.name}, Age: ${student.age}, Grade: ${student.grade}`
  );
}

students.forEach(printStudent);

setTimeout(() => {
  console.log("Task complete");
}, 3000);
