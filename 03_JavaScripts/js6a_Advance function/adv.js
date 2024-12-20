// // ************************HIGHER ORDER FUNCTION***************************
// function callTwice(func) {
//     func();
//     func();
// }

// function callTenTimes(f) {
//     for (i = 0; i < 10; i++){
//         f()
//     }
// }

// function rollDie() {
//     const roll = Math.floor(Math.random() * 6) + 1
//     console.log(roll)
// }

// callTenTimes(rollDie) or callTwice(rollDie)


// +++++++++++++++++++++++++++++++++Returning Function


// function makeMysteryFunc() {
//     const rand = Math.random();
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS, I AM A GOOD FUNCTION")
//             console.log("YOU WON MILLION DOLLARS!")
//         }
//     } else {
//         return function () {
//             alert("YOU HAVAE BEEN INFECTED BY COMPUTER VIRUS")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!!!!!!!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!!!!!!!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!!!!!!!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!!!!!!!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!!!!!!!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!!!!!!!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!!!!!!!")
//         }
//     }
// }

// let raj = makeMysteryFunc();
// raj();

// eg2
// function isBetween(num) {
// return num >=50 && num<=100
// }
// function isBetween2(num) {
// return num >=1 && num<=10
// }


// //eg3
// function makeBetweenFunc(min, max) {
//     return function(num){
//         return num >= min && num <= max
//     }
// }

// const isChild = makeBetweenFunc(0, 18)
// const isAdult = makeBetweenFunc(19, 64)
// const isSenior = makeBetweenFunc(65,120)

// //isChild(5) //true



// +++++++++++++++++++++++++++++++++++++++++++++++++METHODS

const myMath = {
    PI: 3.14159,
    square: function (num) {
        return num * num;
    },
    cube: function (num) {
        return num ** 3;
    }

}


const cat = {
    name: 'Blue Steele',
    color: 'grey',
    breed: 'scottish flod',
    meow() {
        console.log("MEOW MEOW MEOW")
    }
}