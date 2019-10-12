// import database
const conn = require("../configs/db");

// define all functions
module.exports = {
  // this function can display all products, search product by name, sort product (by name, category, date_added), and limit display according to page
  getProducts: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT * FROM history ORDER BY date_created",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  insertProducts: data => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO history SET ?", data, (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(new Error(err));
        }
      });
    });
  },
  getDailyIncome: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT DAYNAME(date_created) as DAY, WEEK(date_created) as WEEK, MONTHNAME(date_created) MONTH, YEAR(date_created) as YEAR, SUM(price) AS INCOME, SUM(quantity) AS QUANTITY FROM history GROUP BY DAY(date_created) ORDER BY date_created",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getWeeklyIncome: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT DAYNAME(date_created) as DAY, WEEK(date_created) as WEEK, MONTHNAME(date_created) MONTH, YEAR(date_created) as YEAR, SUM(price) AS INCOME, SUM(quantity) AS QUANTITY FROM history GROUP BY WEEK(date_created), DAY(date_created) ORDER BY date_created",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getMonthlyIncome: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT DAYNAME(date_created) as DAY, WEEK(date_created) as WEEK, MONTHNAME(date_created) MONTH, YEAR(date_created) as YEAR, SUM(price) AS INCOME, SUM(quantity) AS QUANTITY FROM history GROUP BY MONTH(date_created), WEEK(date_created) ORDER BY date_created",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  },
  getYearlyIncome: () => {
    return new Promise((resolve, reject) => {
      conn.query(
        "SELECT DAYNAME(date_created) as DAY, WEEK(date_created) as WEEK, MONTHNAME(date_created) MONTH, YEAR(date_created) as YEAR, SUM(price) AS INCOME, SUM(quantity) AS QUANTITY FROM history GROUP BY YEAR(date_created) ORDER BY date_created",
        (err, result) => {
          if (!err) {
            resolve(result);
          } else {
            reject(new Error(err));
          }
        }
      );
    });
  }
};
