// const password = prompt("ENTER YOUR PASSWORD");
// if (password.length >= 6 && password.indexOf(' ') === -1) {
    // console.log("valid password");                               // AND &&
// } else {
//     console.log("INCORRECT")
//  }


// 0 - 5 free
// 5 - 10 $10
// 10 - 65 $20                                                      //OR ||
// 65+ free

// const age = prompt("enter age");
// if (age >= 0 && age < 5 || age >= 65) {
//     console.log('FREE');
// } else if (age >= 5 && age < 10) {
//     console.log('$10');
// } else if (age >= 10 &&age < 65) {
//     console.log('$20');
// } else {
//     console.log ("INVALID AGE")
// }


// !                                                                  //NOT !

// let firstName = prompt("enter your first name");
// if (!firstName) {
//     firstName = prompt("TRY AGAIN!!")
// }


const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) {
    console.log("YOU ARE NOT A BABY NOR SENIOR")
}