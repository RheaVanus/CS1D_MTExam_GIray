/*
4. Coding Problem 4: Favorite Number Calculation:
Declare a variable that will hold theFayNumber.

Then, use a while loop and prompt() window object to ask the user to guess their favorite number

until they guess correctly.

For each guess, log whether the guess is too high, too low, or correct.
*/
let favNum = 9;
let guessNum = parseInt(prompt("Guess your fave number!"))

while (guessNum !== favNum){
    if (guessNum > favNum) {
        console.log("Too High")
    }else{
        console.log("Too Low!")
    }
    guessNum = parseInt(prompt("Guess your fave number!"))    
}
console.log("Correct");