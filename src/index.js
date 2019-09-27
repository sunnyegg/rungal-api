// import all the required modules
const express = require('express')
const Route = express.Router()

// defines all routes
const products = require('./routes/products')
const categories = require('./routes/categories')
const login = require('./routes/login')

Route
  .use('/api/v1', products)
  .use('/api/v1', categories)
  .use('/api/v1', login)

module.exports = Route
