// function singSong() {
//     console.log("DO")
//     console.log("RE")
//     console.log("ME")
// }

// singSong();
// singSong();
// singSong();
// singSong();
// singSong();
// singSong();

// function greet(firstName) {
//    console.log(`Hi there, ${firstName}!`)

// }


// Define a function called rant which accepts a string argument called message.
// The function should print out an uppercased version of message 3 times(with 3 separate calls to console.log).
// For example, rant("I hate beets") should print out:

// I HATE BEETS
// I HATE BEETS
// I HATE BEETS

// function rant(message) {
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
//     console.log(message.toUpperCase());
// }

// OR
// function rant(message) {
//     for (let i = 0; i < 3; i++){
//         console.log(message.toUpperCase())
//     }
// }

// function greet(firstName, lastName) {
//     console.log(`Hey there, ${lastName[0]}.${firstName}`)
// }

// function repeat(str, numTimes) {
//     let result = "";
//     for (let i = 0; i < numTimes; i++) {
//         result += str;
//     }
//     console.log(result)
// }


// function isSnakeEyes(die1,die2) {
//     if (die1 === 1 && die2 === 1) {
//         console.log("Snake Eyes!");
//     } else {
//         console.log('Not Snake Eyes!');
//     }
//     console.log(die1,die2)
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                                  RETURN
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function add(x, y) {
//     if (typeof x !== "number" || typeof y !== "number") {
//         return false
//     }
//     return x + y;
// }


// function lastElement(arr){
//     if(arr.length === 0){
//         return null
//     }
//     return arr[arr.length -1]   // [1,2,2,3,5] => length vandu 5 namaku last valu venum so adhu index vandu 4
// }


//sum 41 Define a function called capitalize that accepts a string argument and returns a new string with the first letter capitalized (but the rest of the string unchanged).  For example:

// capitalize('eggplant') // "Eggplant"
// capitalize('pamplemousse') // "Pamplemousse"
// capitalize('squid') //"Squid"

// function capitalize(str){
//     const firstAlphabet = str[0].toUpperCase();
//     const remainingAlphabets = str.slice(1);
    
//     return firstAlphabet+remainingAlphabets
    
// }


// function sumArray(arr) {
//     let sum = 0;
//     for (let i = 0 ; i < arr.length; i++) {
//                 sum += parseInt(arr[i]);
//     }
//     return sum
// }


function returnDay(num) {
    
}