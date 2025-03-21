/*
7-8. Coding Problem 7-8: Student Enrollment:
Create two (2) arrays, namely DSA, WebDev

(Subjects) The program must ask the user to select the subject of choice to enroll a student (A) DSA,(B) WebDev

(Operations) The user then must select an option between (A) Enroll, (B) Unenroll, (C) Select Another Subject, (D) Exit).

(Enroll) Once selected, the program must ask the name of the student to enroll in the subject
    Use the push() to add the name of the student at the end of the array of the subject

Then the program must be routed back to (Operations).

(Unenroll) Once selected, the program must:
    List the name of currently enrolled students in the subject, then
    Ask the name of the student to enroll in the subject
    Use the pop()/unshift()/slice() to remove the name of the student in the array of the subject.

(Select Another Subject) Once selected, the program must:
    Return to Subjects
(Exit) Once selected, the program must print out all the enlisted students per subject array, and exits the program from execution.
*/

let DSA = [];
let WebDev = [];
let subject;

while (true) {
    let choice = prompt("Where do you want to enroll? A. DSA? B. WebDev? (Letter only)");
    if (choice.toLowerCase() === "a") {
        subject = DSA;
        break; 
    } else if (choice.toLowerCase() === "b") {
        subject = WebDev;
        break; 
    }
}

while (true) {
    let operations = prompt("A. Enroll?\nB. Unenroll?\nC. Select Another Subject\nD. Exit (Letter only)");

    if (operations.toLowerCase() ==="a") {
        let stud_name = prompt("What is the student name?");
        subject.push(stud_name);
        alert(`${stud_name} has been enrolled.`);
        console.log("DSA:", DSA);
        console.log("WebDev:", WebDev);
} else if (operations.toLowerCase() === "b") {
        if (subject.length === 0) {
            alert("No student record.");
        } else {
            alert(`Current Students: \n DSA: ${DSA} \n WebDev: ${WebDev}`);
            let remove_stud = prompt("Enter the student name to be unenrolled:");
            let class_num = subject.indexOf(remove_stud);
            if (class_num !== -1) {
                subject.splice(class_num, 1); // Correct removal
                alert(`${remove_stud} has been unenrolled.`);
            } else {
                alert(`${remove_stud} is not on the list.`);
            }
}
} 
    else if (operations.toLowerCase() === "c") {
        while (true) {
            let newChoice = prompt("Select a subject: A. DSA? B. WebDev? (Letter only)");
            if (newChoice === "A") {
                subject = DSA;
                break;
            } else if (newChoice === "B") {
                subject = WebDev;
                break;
            } else {
                alert("Invalid selection. Please choose A or B.");
            }
        }
    }else if (operations.toLowerCase() === "d"){
        alert(`Current Students: \n DSA: ${DSA} \n WebDev: ${WebDev}`);
        break; 
    }else{
        alert("Invalid Operation!!!")
    }
}
