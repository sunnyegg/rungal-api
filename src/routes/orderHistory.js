// import all the required modules
const express = require("express");
const Route = express.Router();
// const methods = require("../methods");

// import controller
const historyController = require("../controllers/orderHistory");

Route.get("/history", historyController.getProducts);
Route.get("/history/daily", historyController.getDailyIncome);
Route.get("/history/weekly", historyController.getWeeklyIncome);
Route.get("/history/monthly", historyController.getMonthlyIncome);
Route.get("/history/yearly", historyController.getYearlyIncome);
Route.post("/history", historyController.insertProducts);

module.exports = Route;
