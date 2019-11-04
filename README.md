![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/Storage-Amazon%20Web%20Service-informational.svg)

# Express Rungal

<p align="center">
  <a href="https://nodejs.org/">
    <img title="Restful API" src="https://cdn-images-1.medium.com/max/871/1*d2zLEjERsrs1Rzk_95QU9A.png">
  </a>
</p>

---

## Projects that uses this API:

1. Rungal App (Web) | [Link](https://github.com/sunnyegg/react-rungalapp-bootstrap)
2. Rungal App (Mobile) | [Link](https://github.com/sunnyegg/rn-rungal)

---

## Table of Contents

- [Introduction](#introduction)
- [Prerequisite](#prerequisite)
- [Installation](#installation)
  - [Clone](#clone)
  - [Environment](#environment)
  - [Start](#start)
- [Dependencies](#dependencies)
- [Features](#features)
- [Routes](#api-routes)

---

## Introduction

Rungal is a point of sales application of restaurant. The main use of this application is to take order from customer easier and faster.

---

## Prerequisite

| **Main Dependencies** | **Description**                                           | **Link**                                         |
| --------------------- | --------------------------------------------------------- | ------------------------------------------------ |
| **Node.js**           | A Javascript runtime.                                     | [Go](https://nodejs.org/en/)                     |
| **Express.js**        | A Javascript framework for building web application/APIs. | [Go](https://expressjs.com/)                     |
| **MySQL**             | A relational database management system (RDMS).           | [Go](https://www.npmjs.com/package/mysql)        |
| **JWT**               | A package for generating token.                           | [Go](https://www.npmjs.com/package/jsonwebtoken) |

---

## Installation

### Clone

```bash
$ git clone https://github.com/sunnyegg/rungal-api.git
$ cd rungal-api
$ npm install
```

---

### Create Environment Variables

```bash
$ mv .env.example .env
$ [your text editor] .env
```

Example:

```
SERVER_PORT = 3300 // Port where your server is listen to

DB_HOST = localhost // Host of your MySQL DB
DB_USER = root // User of your MySQL DB
DB_PASSWORD = root // Password of your user in MySQL DB
DB_DATABASE = database // Name of your database in MySQL DB

SECRET_KEY = thisissecretkey // Secret key for JWT
```

---

### Start

```bash
$ npm start
```

---

## Other Dependencies

| **Other Dependencies** | **Description**                                | **Link**                                               |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------------ |
| **Bcrypt.js**          | To encrypt credentials (eg. password).         | [Go](https://www.npmjs.com/package/bcryptjs)           |
| **CORS**               | To allow resource sharing from another domain. | [Go](https://www.npmjs.com/package/cors)               |
| **Dotenv**             | To create environment variables.               | [Go](https://www.npmjs.com/package/dotenv)             |
| **Express Fileupload** | To upload files.                               | [Go](https://www.npmjs.com/package/express-fileupload) |

---

## Features

- Get ALL products/categories
- Get History Order and Revenue
- Search, sort, pagination product
- Add product/category
- Edit product/category
- Delete product/category
- Increase quantity product
- Reduce quantity product
- Register user
- Login user with JWT

---

## API Routes

| Feature                   | Method | Route                | Desc                                     |
| ------------------------- | ------ | -------------------- | ---------------------------------------- |
| Product                   | GET    | /products            | Get list of all products                 |
|                           | POST   | /products            | Add a product                            |
|                           | PUT    | /products/:id        | Edit a product of `:id`                  |
|                           | DELETE | /products/:id        | Delete a product of `:id`                |
|                           | PATCH  | /products/order/:id  | Increase the quantity of a product `:id` |
|                           | PATCH  | /products/reduce/:id | Reduce the quantity of a product `:id`   |
| Category                  | GET    | /categories          | Get list of all categories               |
|                           | POST   | /categories          | Add a category                           |
|                           | PUT    | /categories/:id      | Edit a product of `:id`                  |
|                           | DELETE | /categories/:id      | Delete a product of `:id`                |
| Users                     | POST   | /register            | Register a new user                      |
|                           | POST   | /login               | Login                                    |
| History Order and Revenue | GET    | /history             | Get list of all history orders           |
|                           | POST   | /history             | Add an order (checkout)                  |
|                           | GET    | /history/daily       | Get list of all daily income             |
|                           | GET    | /history/weekly      | Get list of all weekly income            |
|                           | GET    | /history/monthly     | Get list of all monthly income           |
|                           | GET    | /history/yearly      | Get list of all yearly income            |
