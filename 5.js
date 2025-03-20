/*
5. Coding Problem 5: Color Preferences:
Create an array to store three colors the user likes. Use a prompt() window object and a loop statement to allow the user to input a value.
    • Use the push() method to add a new color to the array
    • Each push() or user input, the array list must be updated and printed out to the console log.
*/
let colorArray = []

while (colorArray.length < 3){
    let favColor = prompt("What is your favorite color?")
    colorArray.push(favColor)
    console.log(colorArray)
}