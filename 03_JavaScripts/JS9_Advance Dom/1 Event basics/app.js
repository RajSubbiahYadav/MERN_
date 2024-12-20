const btn = document.querySelector('#v2')

btn.onclick = function () {
    console.log("You clicked me!")
    console.log("I hope it worked!!")
}

function scream() {
    console.log('AHAHHHHHHAH')
    console.log('STOP TOUCHING ME')
}
btn.onmouseenter = scream;


document.querySelector('h1').onclick = function () {
    alert('You clicked the h1!')
}

const btn3 = document.querySelector('#v3');

btn3.addEventListener('click', function(){
    alert('clickedd')
})

btn.addEventListener(

)

