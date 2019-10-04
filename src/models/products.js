// import database
const conn = require('../configs/db')

// define all functions
module.exports = {
  // this function can display all products, search product by name, sort product (by name, category, date_added), and limit display according to page
  getProducts: (lim) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT a.id, a.name, a.description, a.image, b.name as category, a.price, a.quantity, a.date_added, a.date_updated FROM product a, category b WHERE a.category=b.id AND a.name LIKE ? ORDER BY a.${lim.b} ${lim.e} LIMIT ?,?`, [lim.a, lim.c, lim.d],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
    })
  },

  countData: () => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT COUNT(*) count FROM product', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(new Error(err))
        }
      })
    })
  },

  addProduct: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT INTO product SET ?', data,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
    })
  },

  addQuantityProduct: (qty, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE product SET quantity = quantity + ? WHERE ?', [qty, id],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
    })
  },

  reduceQuantityProduct: (qty, id) => {
    return new Promise((resolve, reject) => {
      conn.query('SELECT quantity FROM product WHERE ?', id,
        (err, result) => {
          if (result.length > 0) {
            const quantity = parseInt(result[0].quantity, 10) - parseInt(qty, 10)
            if (quantity > 0) {
              conn.query('UPDATE product SET quantity = ? WHERE ?', [quantity, id],
                (err) => {
                  if (!err) {
                    resolve(result)
                  } else {
                    reject(new Error(err))
                  }
                })
            } else {
              reject(new Error(err))
            }
          } else {
            reject(new Error(err))
          }
        })
    })
  },
  editProduct: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE product SET ? WHERE ?', [data, id],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
    })
  },

  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM product WHERE ?', [id],
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
    })
  },

  searchProductbyName: (search) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT * FROM product WHERE name LIKE '%${search}%'`,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
    })
  },
  sortProduct: (parameter) => {
    return new Promise((resolve, reject) => {
      conn.query(`SELECT a.id, a.name, a.description, a.image, b.name AS category, a.price, a.quantity, a.date_added, a.date_updated FROM product a, category b WHERE a.category=b.id ORDER BY ${parameter}`,
        (err, result) => {
          if (!err) {
            resolve(result)
          } else {
            reject(new Error(err))
          }
        })
    })
  }
}
