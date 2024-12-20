// let random = Math.random();
// if (random < 0.5) {                                          //else if condition
//     console.log("Your number is less than 0.5")
//     console.log(random);
// }

// if (num % 2) {
//     console.log("num is a even number")
//     console.log("num")
// }


// const dayOfWeek = prompt("ENTER A DAY").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("UGHH I HATE MONDAYS!!")
// } else if (dayOfWeek === 'saturday') {
//     console.log("YAY I LOVE SATURDAYS")                              //else condition
// } else if (dayOfWeek === 'friday') {
//     console.log("ITS A REGULAR WORKINGDAY")
// } else {
//     console.log("MEH")
// }


// 0 - 5 - FREE
// 5 - 10 CHILD $10
// 10 - 65 ADULT $20
// 65+ SENIOR $10


// const age = 35;

// if (age < 5) {
//     console.log("You are a Kid. You get in for Free!!")
// } else if (age < 10) {
//     console.log("You are a child. You have to pay $10 to enter")
// }else if (age < 65) {
//     console.log("You are a adult. You have to pay $20 to enter")
// }else if (age > 65 ) {
//     console.log("You are a senior. You have to pay $10 to enter")
// }


//a                                                                 //nesting condition

const password = prompt("Plese enter a new password");

// Password must be 6+ characters
if (password.length >= 6) {
    // Password cannot include space
if (password.indexOf(' ') === -1) {
    console.log("Valid Password!")
} else {
    console.log("Password cannot contain sapces!")
}

} else {
    console.log("PASSWORD IS TOO SHORT! must be 6+ characters")
}



