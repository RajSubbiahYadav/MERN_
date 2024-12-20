// // // Eg1

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // // function print(el) {
// // //     console.log(el)
// // // }
// //                                 //function outside
// // // // print(nums[0]);
// // // // print(nums[2]);

// // // nums.forEach(print)

// //                                 //function inline
                                
// // nums.forEach(function (el) {
// //     console.log(el)
// // });

// nums.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)             //even numbers
//     }
// })

// //eg2

// const movies = [
//     {
//         title: "Theri",
//         score: 80
//     },
//     {
//         title: "Leo",
//         score:98
//     },
//     {
//         title: "Master",
//         score:95
//     },
//     {
//         title: "Mersal",
//         score:99
//     }
// ]

// movies.forEach(function(vijay){
//     console.log(`${vijay.title} - ${vijay.score}/100`)

// })

//======================================================= //map method

//eg1

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const square = num.map(function (n) {
//     return n * n;
// });

//eg2
// const movies = [
//     {
//         title: "Theri",
//         score: 80
//     },
//     {
//         title: "Leo",
//         score:98
//     },
//     {
//         title: "Master",
//         score:95
//     },
//     {
//         title: "Mersal",
//         score:99
//     }
// ]

// const titles = movies.map(function (vijay) {
//     return vijay.title.toUpperCase();
// });

// ===================+++++++++++++++++++++++++++++++++ARROW FUNCTOIN

// const add = function (x, y) {       //normal function declaration
//     return x + y;
// }

// const add = (x, y) => {
//     return x + y;
// }

// const square = (x) => {
//     return x*x
// }

// const rollDie = () => (
//     Math.floor(Math.random() * 6) + 1
// )

// const add = (a, b) => a + b

//eg3
// const movies = [
//     {
//         title: "Theri",
//         score: 80
//     },
//     {
//         title: "Leo",
//         score:98
//     },
//     {
//         title: "Master",
//         score:95
//     },
//     {
//         title: "Mersal",
//         score:99
//     }
// ]

// // const newMovie = movies.map(function (vijay) {
// //     return `${vijay.title} - ${vijay.score /10}`

// const newMovies = movies.map((vijay) => (
//     `${vijay.title} - ${vijay.score /10}`
// ))








// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ setTimeout & setInterval

// console.log("HELLO!!!!!!!!")
// setTimeout(() => {
//     console.log("....are you still there")
// }, 3000)

// setTimeout(()=>console.log("....are you still there"),3000)

// const id = setInterval(() => {
//    console.log(Math.random()*10)
// },2000);

// ==================================================================Filter

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// num.filter(n => n > 10);

// const movies = [
//     {
//         title: "Theri",
//         score: 80,
//         year:  2016
//     },
//     {
//         title: "Leo",
//         score: 98,
//         year: 2023
        
//     },
//     {
//         title: "Master",
//         score: 95,
//         year: 2020
//     },
//     {
//         title: "Mersal",
//         score: 99,
//         year: 2018
//     }
// ]

// const goodMovies = movies.filter(m => m.score> 95)
// const badMovies = movies.filter(m => m.score <= 95).map(m => m.title)

// const recentMovies = movies.filter(m => m.year > 2020)


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++REDUCE

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];

//without reduce
// let total = 0;
// for (let price of prices) {
//     total += price
// }
// console.log(total)


//with reduce

// const totalmrp = prices.reduce((total, element) => {
//     return total + element
// })


// const totalmrp = prices.reduce((total, element) => total * element)

// const minprice = prices.reduce((min, price) => {
//     if (price > min) {
//         return price;
//     }
//     return min;
// })

const movies = [
    {
        title: "Theri",
        score: 80
    },
    {
        title: "Leo",
        score:98
    },
    {
        title: "Master",
        score:95
    },
    {
        title: "Mersal",
        score:99
    }
]

const bestMovie = movies.reduce((bestMovie, normalMovie) => {
    if (bestMovie.score > normalMovie.score) {
        return bestMovie;
    }
    return normalMovie
})