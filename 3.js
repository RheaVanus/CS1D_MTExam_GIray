/*
3. Coding Problem 3: User Age Categorization:
After collecting the user's age with prompt, use a conditional statement to categorize the user into
one of the following age groups:
    Toddler (under 5 years)
    Child (5-12 years)
    Teenager (13-19 years)
    Young Adult (20-35 years)
    Middle-Aged (36-60 years)
    Senior (over 60 years)
Log the appropriate message for each category in the console log.
*/

let age = parseInt(prompt("What's your age?"))

if (age < 5){
    console.log("Toddler");
}else if (age >= 5 && age <= 12){
    console.log("Child");
}else if (age >= 13 && age <= 19){
    console.log("Teenager");
}else if (age >= 20 && age <= 35){
    console.log("Young Adult");
}else if (age >= 36 && age <= 60){
    console.log("Middle-Aged");
}else {
    console.log("Senior");
}