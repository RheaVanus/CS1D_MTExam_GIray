/*
2. Coding Problem 2: User Information Collection:
Create a new JavaScript file named classSubjects.js.
Collect the following user information with the use of prompt ():

Subject Title
Class Schedule (Time, Days)
Classroom
Class Instructor
Student Name

• Use variables to store this information and log it to the console following the string
"{Student Name) is currently enrolled in (Subject Title} with a class schedule of {Class Schedule) at room (Classroom). 
The instructor for the subject is (Class Instructor"]
*/

let subTitle = prompt ("Subject Title?");
let classSched = prompt("Class Schedule?");
let classroom = prompt("Classroom?");
let clInstructor = prompt("Class Instructor?");
let studName = prompt("Student Name?");

console.log(`${studName} is currently entolled in ${subTitle} with a class schedule of ${classSched} at room ${classroom}. The instructor for the subject is ${clInstructor}`);