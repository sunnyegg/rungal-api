// import database
const conn = require('../configs/db')

module.exports = {
    getCategories: () => {
        return new Promise((resolve, reject) => {
            conn.query('SELECT * FROM category',
            (err, result) => {
                if(!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    addCategory: (data) => {
        return new Promise((resolve, reject) => {
            conn.query('INSERT INTO category SET ?', data,
                (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
        })
    },
    editCategory: (data, id) => {
        return new Promise((resolve, reject) => {
            conn.query('UPDATE category SET ? WHERE ?', [data, id],
                (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                })
        })
    },
    deleteCategory: (id) => {
        return new Promise((resolve, reject) => {
            conn.query('DELETE FROM category WHERE ?', [id],
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