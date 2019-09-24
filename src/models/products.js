// import database
const conn = require('../configs/db')

module.exports = {
    getProducts: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT a.name, a.description, a.image, b.name as category, a.price, a.quantity, a.date_added, a.date_updated FROM product a, category b WHERE a.category=b.id',
            (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    getProductbyID: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT a.name, a.description, a.image, b.name as category, a.price, a.quantity, a.date_added, a.date_updated FROM product a, category b WHERE a.category=b.id AND a.?', id,
            (err, result) => {
                if(!err) {
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
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },

    removeQuantityProduct: (qty, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE product SET quantity = quantity - ? WHERE ?', [qty, id],
            (err, result) => {
                if(!err) {
                    resolve(result)
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
                    reject(console.log(err))
                }
            })
        })
    }
}