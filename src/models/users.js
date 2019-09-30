const conn = require('../configs/db')

module.exports = {
  registerUser: (regist) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO user SET ?', regist,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
    })
  },
  loginUser: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT * FROM user WHERE user = ?', data.user, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  }
}
