// import all the required modules
const mysql = require('mysql')
const config = require('./configs')

// connect api to database
const connection = mysql.createConnection(config.database.mysql)
connection.connect((err) => {
  if (err) console.log(`Error: ${err}`)
  console.log('Connected to database!')
})

module.exports = connection
