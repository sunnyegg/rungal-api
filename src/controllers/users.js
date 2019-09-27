const userModel = require('../models/users')

module.exports = {
  registerUser: (req, res) => {
    const user = req.body.user
    const password = req.body.password

    const regist = { user, password }

    userModel.registerUser(regist)
      .then(result => {
        res.json({
          status: 200,
          message: 'User is registered successfully!',
          user: regist.user
        })
      })
      .catch(err => {
        res.status(500).json({
          status: 500,
          message: 'Register failed.',
          error: err
        })
      })
  },
  loginUser: (req, res) => {
    const jwt = require('jsonwebtoken')

    const { user, password } = req.body
    const data = { user }
    userModel.loginUser(data).then(resultQuery => {
      if (resultQuery.length > 0) {
        if (password === resultQuery[0].password) {
          var token = jwt.sign(
            { username: data.user },
            process.env.SECRET_KEY,
            (err, token) => {
              res.send({
                ok: true,
                message: 'Login successful!',
                user: data.user,
                token: token,
                error: err
              })
            }
          )
        }
      } else {
        res.status(500).json({
          status: 500,
          message: 'Username or Password is incorrect!'
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
