/*
6. Coding Problem 6: The Grocery List:
Create a prompt that will ask for the user to create a grocery list (y/n):

(If Y) The program then must ask for user input the number of items to be registered in the grocery list.

The program must ask for the Items to be included in the list.

The grocery list must be sorted out safely and stored in grocerylist Sort, and reversed safely and stored in groceryList Reverse.

Print via alert() the grocery list, grocerylist Sort, and grocerylist Reverse.
*/

let creations = prompt("Do you want to make a list? (y/n)");

if (creations.toLowerCase() == "y"){
    let numIter = parseInt(prompt("How many items do you want to add?"))
    let groceryList = [];

    for (let i = 0; i < numIter; i++){
        let grocery = prompt("Add items:", i + 1)
        groceryList.push(grocery)
    }
    alert(groceryList);

    let groceryListSort = groceryList.toSorted()
    alert(groceryListSort);

    let groceryListRev = groceryList.toReversed()
    alert(groceryListRev);
}else{
    alert("No Then...")
}