// new Promise((resolve, rejecct) => {
//     reject()
// })

// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();
//         setTimeout(() => {
//             if (rand < 0.7) {
//                 resolve("YOUR FAKE DATA HERE");
//             }
//             reject("REQ ERROR!!!");
//        },1000)
//     })
// }

// fakeRequest('/dogs/1')
//     .then(() => {
//         console.log("DONE WITH REQUEST!")
//         console.log('data is:',data)
//     })
//     .catch((err) => {
//         console.log("OHHH NO!",err)
//     })


    // setTimeout(() => {
    //     document.body.style.backgroundColor = "Red";
    //     setTimeout(() => {
    //         document.body.style.backgroundColor = "Orange";
    //         setTimeout(() => {
    //             document.body.style.backgroundColor = "Yellow";
    //             setTimeout(() => {
    //                 document.body.style.backgroundColor = "Green";
    //                 setTimeout(() => {
    //                     document.body.style.backgroundColor = "blue";
    //                     setTimeout(() => {
    //                         document.body.style.backgroundColor = "Purple";
    //                       }, 1000);
    //                   }, 1000);
    //               }, 1000);
    //           }, 1000);
    //       }, 2000);
//   }, 1000);
    
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        },delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('voilet', 1000))


async function rainbow() {
   await delayedColorChange('red',1000)
   await delayedColorChange('orange',1000)
   await delayedColorChange('yellow',1000)
   await delayedColorChange('green',1000)
   await delayedColorChange('blue',1000)
   await delayedColorChange('indigo',1000)
   await delayedColorChange('violet', 1000)
    return "ALL DONE!"
}

rainbow().then(() => console.log("END OF RAINBOW!"))

async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW:")
}