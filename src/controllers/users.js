const bcrypt = require('bcryptjs')
const userModel = require('../models/users')

module.exports = {
  registerUser: (req, res) => {
    const regist = {
      user: req.body.user,
      password: req.body.password
    }

    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(regist.password, salt)

    bcrypt.genSalt(10, (err, result) => {
      bcrypt.hash(regist.password, salt, (err, hash) => {
        if (err) throw err
        regist.password = hash

        userModel.registerUser(regist)
          .then(result => {
            res.json({
              status: 200,
              message: 'User is registered successfully!',
              user: regist.user
            })
          })
          .catch(err => {
            console.log(err)
            res.status(500).json({
              status: 500,
              message: 'Register failed.'
            })
          })
      })
    })
  },
  loginUser: (req, res) => {
    const jwt = require('jsonwebtoken')

    const { user, password } = req.body

    const data = { user, password }

    userModel.loginUser(data)
      .then(resultQuery => {
        if (resultQuery > 0) {
          console.log(resultQuery)
          return res.status(404).json({
            status: 404,
            message: 'User not found!'
          })
        }
        const passwordCheck = bcrypt.compareSync(data.password, resultQuery[0].password)
        if (!passwordCheck) {
          return res.status(400).json({
            status: 400,
            message: 'User or Password is incorrect'
          })
        }

        const token = jwt.sign({ username: data.user }, process.env.SECRET_KEY,
          (err, token) => {
            res.send({
              ok: true,
              message: 'Login successful!',
              user: data.user,
              token: token
            })
          }
        )
      })
      .catch(err => {
        console.log(err)
      })
  }
}
