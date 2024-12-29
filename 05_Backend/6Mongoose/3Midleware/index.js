const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('tiny'))

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use((req, res, next) => {
    const { password } = req.query;
    if (password === 'raju') {
        next();
    }
    res.send('sorry you need password')
})


// app.use((req, res, next) => {
//     console.log('Kuruka endha kaushik vanda')
//     return next();
//     console.log('naa vanta!!!!!!!!!!hEHEhehhehehe')
// })
// app.use((req, res, next) => {
//     console.log('Kuruka endha kaushik  tirumba vanda vanda')
//     return next();
// })


app.get('/', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Home Page')
})

app.get('/dogs', (req, res) => {
    console.log(`Request Date: ${req.requestTime}`)
    res.send('Dog landing Page')
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND')
})

app.listen(3000, () => {
    console.log('APP in in port 3000')
})