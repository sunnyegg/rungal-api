// import all the required modules
const express = require('express')
const Route = express.Router()
const methods = require('../methods')

// import controller
const productsController = require('../controllers/products')

Route
  .get('/products', productsController.getProducts)
  .post('/products', methods.ensureToken, productsController.addProduct)
  .patch('/products/order/:id', methods.ensureToken, productsController.addQuantityProduct)
  .patch('/products/reduce/:id', methods.ensureToken, productsController.reduceQuantityProduct)
  .put('/products/:id', methods.ensureToken, productsController.editProduct)
  .delete('/products/:id', methods.ensureToken, productsController.deleteProduct)

module.exports = Route
