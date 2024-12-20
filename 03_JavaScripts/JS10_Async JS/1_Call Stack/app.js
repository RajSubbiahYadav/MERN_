// // function multiply(x, y) {
// //   return x * y;
// // }

// // function square(x) {
// //   return multiply(x, x);
// // }

// // function isRightTriangle(a, b, c) {
// //   return square(a) + square(b) === square(c);
// // }

// // console.log('BEFOREEEEEE!!!!!')

// // isRightTriangle(3, 4, 5);

// // console.log('DONEEEEEEE!!!!!')

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++CALLBACK HELL

// setTimeout(() => {
//   document.body.style.backgroundColor = "Red";
// }, 1000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "Orange";
// }, 2000);

// setTimeout(() => {
//   document.body.style.backgroundColor = "Yellow";
// }, 3000);

// or we can nest

setTimeout(() => {
    document.body.style.backgroundColor = "Red";
    setTimeout(() => {
        document.body.style.backgroundColor = "Orange";
        setTimeout(() => {
            document.body.style.backgroundColor = "Yellow";
            setTimeout(() => {
                document.body.style.backgroundColor = "Green";
                setTimeout(() => {
                    document.body.style.backgroundColor = "blue";
                    setTimeout(() => {
                        document.body.style.backgroundColor = "Purple";
                      }, 1000);
                  }, 1000);
              }, 1000);
          }, 1000);
      }, 2000);
  }, 1000);
  
  
  
  
  