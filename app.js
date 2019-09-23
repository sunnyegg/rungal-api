// import all the required modules
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = 3333
const app = express() // use the express

// parsing input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// logging activities
app.use(logger('dev'))


// app listening to
app.listen(port, function(){
    console.log('Server listening on: ' + port)
})


// import all routes
const routerNav = require('./src/index')
app.use('/', routerNav)

// determines all other routes
app.get('*', (req, res) => {
    res.send('The page you are looking for is not found.')
})