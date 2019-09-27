// import all the required modules
const express = require('express')
const Route = express.Router()
const methods = require('../methods')

// import controller
const categoriesController = require('../controllers/categories')

Route
  .get('/categories', categoriesController.getCategories)
  .post('/categories', methods.ensureToken, categoriesController.addCategory)
  .put('/categories/:id', methods.ensureToken, categoriesController.editCategory)
  .delete('/categories/:id', methods.ensureToken, categoriesController.deleteCategory)

module.exports = Route
