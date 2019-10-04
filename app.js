// import all the required modules
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cors = require('cors')
const fileUpload = require('express-fileupload')
require('dotenv/config')

const app = express() // use the express

// enable fileupload
app.use(fileUpload())
app.use(express.static('./src/assets/img/'))

// parsing input
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// cors
app.use(cors())

// logging activities
app.use(logger('dev'))

// port
const port = process.env.SERVER_PORT || 3000

// app listening to
app.listen(port, function () {
  console.log(`Server listening on: ${port}`)
})

// import all routes
const routerNav = require('./src/index')
app.use('/', routerNav)

// determines all other routes
app.get('*', (req, res) => {
  res.send('The page you are looking for is not found.')
})
