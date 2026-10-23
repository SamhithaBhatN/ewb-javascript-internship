
const marks = 75;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

const letterGrade = "A";

switch (letterGrade) {
    case "A":
        console.log("Excellent!");
        break;
    case "B":
        console.log("Good job!");
        break;
    case "C":
        console.log("Keep improving!");
        break;
    default:
        console.log("Grade not recognized.");
}

const studentMarks = 65;

const result = studentMarks >= 40 ? "Pass" : "Fail";

console.log("Result:", result);
