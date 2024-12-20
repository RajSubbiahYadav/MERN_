// const subreddits = ['cringe', 'books', 'chicken', 'funny', 'pics', 'soccer', 'cricket']

// for (let i = 0; i < subreddits.length; i++){
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// //insted we can use for....of

// for (let sub of subreddits) {
//     console.log(`Visit reddit.com/r/${sub}`)
// }

//eg2
// for (let raj of 'hello world') {
//     console.log(raj)
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for (let num of number) {
//     console.log(num*num)
// }



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
//     Iterating over Obeject 
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const testScores = {
    Rahul: 80,
    Dora: 77,
    Kaushik: 95,
    Remo: 58,
    Sahil: 67,
    Ash: 69,
    Atharva: 79,
    Manoj: 73,
    Raj: 99,
    Krithika:100
}

// for (let person of testScores) {            // for of doesn't work for iteration overthe obeject
//     console.log(person)                        // XXX won't run
// }

// for (let person in testScores) {            // for in will work
//     // console.log(person)                        // run
//     console.log(`${person} scored ${testScores[person]}`)
// }

// Object.keys(testScores)
// Object.values(testScores)                diff arrays
// Object.entries(testScores)

// for (let score of Object.values(testScores)) {
//     console.log(score)
// }

// add and avg the total

let total = 0;
let scores = Object.values(testScores);

for (let score of Object.values(testScores)) {
    total += score;
}
console.log(total/scores.length)