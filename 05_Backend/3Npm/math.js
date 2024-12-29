// const add = (x, y) => x + y;
// const PI = 3.14159;
// const square = x => x * x;

// module.exports.add = add;            //we can also use (exports.add = add) its a shorter form
// module.exports.PI = PI;
// module.exports.square = square;

//==========================or
// module.exports.add = (x, y) => x + y;
// module.exports.PI = 3.14159;
// module.exports.square = x => x * x;
//=================================or

const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;

const math = {
    add: add,
    PI: PI,
    square: square,
}
 module.exports = math;
 
