const express = require('express')
const Route = express.Router()

const usersController = require('../controllers/users')

Route
  .post('/register', usersController.registerUser)
  .post('/login', usersController.loginUser)

module.exports = Route
