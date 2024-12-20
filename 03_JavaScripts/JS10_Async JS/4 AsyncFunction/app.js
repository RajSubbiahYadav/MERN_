// async function hello() {
    
// }

// const sing = async () => {
//     throw 'OH NO PROBLEM'
//     return 'LA LA LA LA'
// }

// sing()
//     .then((data) => {
//     console.log("PROMISE RESOLVE WITH:",data)
//     })
//     .catch(err => {
//     console.log("OHH NO!",err)
// })

const login = async (username, password) =>{
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'iamyours') return 'Welcome'
    throw 'Invalid Password'
}

login('RAjuyadav','iamyours')
    .then(msg => {
    console.log('LOGGED IN!')
    console.log(msg)
    })
    .catch(err => {
    console.log('ERROR!!')
    console.log(err)
    })
