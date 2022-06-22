

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    classNum: number;
    lessonName: string;
}

let student: Student;

student = {
    firstName: "Alice",
    lastName: "Doe",
    age: 20,
    classNum: 8,
    lessonName: "music",
}
console.log(student)