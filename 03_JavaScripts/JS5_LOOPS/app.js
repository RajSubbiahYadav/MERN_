// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)


//======================================================================================for loop
// for (let i = 1; i <= n; i++){
//     console.log(i)
// }

//for printing odd number
// for (let i = 1; i <= 49; i += 2){
//     console.log(i);
// }

//print decrement value ->100 90 80 .....

// for (let i = 100; i >= -100; i -= 10){
//     console.log(i)
// }



// for (let i = 10; i <= 10000; i *= 10){
//     console.log(i);
// }

// for (let i = 25; i >= 0; i -= 5){
//     console.log(i);
// }

// =========================================
// DONT RUN THIS CODE ITS INFINITE LOOP!! WARNING!
// =========================================
// for (let i = 7; i >= 0; i++){
//      console.log(i)
// }
// =========================================
// =========================================

//================================================================================== Looping over array
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (i = 0; i < people.length; i++){
    
//     console.log(people[i].toUpperCase());
// }

//==================================================================================Nested Loop

// for (let i = 1; i <= 10; i++){
//     console.log(`i is : ${i}`)
//     for (let j = 1; j < 4; j++){
//         console.log(`    j is :${j}`)
//     }
        
// }

//eg 2

// const seatingChart = [
//     ['Krishna', 'Eron', 'Narayan'],
//     ['Kumar', 'Jayesh', 'Antony', 'Karun'],
//     ['Yash', 'Sonu', 'Jay', 'Erik']
// ]
    
// for (let i = 0; i <= seatingChart.length; i++) {
//     const row = seatingChart[i];
//     console.log(`    ROW #${i}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }
// }

// ================================================================================================
// ================================================================================================
//                                     WHILE LOOP
// ================================================================================================
// ================================================================================================

// let count = 0;
// while (count <= 10) {
//     count++;
//     console.log(count)
    
// }


// const SECRET = "Krithika";

// let guess = prompt('enter the secret code...');
// while (guess !== SECRET) {
//     guess = prompt ("INCORRECT CODE enter the secret code...")
// }
// console.log( " love YOU")



//=================================================================Break Keyword

// let input = prompt("Hey, say somthing and i will copy it!!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() === "stop copying me") break;
// }
// console.log("Ok YOu WON");


// eg 2

// for (let i = 0; i < 100; i++){
//     console.log(i);
//     if (i === 50) break;
// }



// =======================================================================================================
// =======================================================================================================
//                                         Guessing game 203
// =======================================================================================================                                        
// =======================================================================================================                                        
                                        
let maximum = parseInt(prompt("Enter the maximum number!"));
while (!maximum) {
     maximum = parseInt(prompt("Enter A valid number!"));

}
const targetNum = Math.floor(Math.random() * maximum) + 1;


let guess = prompt("Enter your first guess! ( Type 'q' to Quit )");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    guess = parseInt(guess);
    if (guess > targetNum) {
         
        guess = (prompt("Too high! Enter a new guess:"));
        attempts++;
     } else if (guess < targetNum) {
        guess = (prompt("Too low! Enter a new guess:"));
        attempts++;

    } else {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}
if (guess === 'q') {
    console.log("OK, You Quit ")
} else {
    console.log("Congrats You Win!")
    console.log(`You got it ! It took ${attempts} guesses`)
    
}