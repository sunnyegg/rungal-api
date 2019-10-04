![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/Storage-Localhost-orange.svg)

# Express Rungal

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

Are you hungry? But too lazy to leave your bed and buy food? Rungal can help you order what you want to eat and deliver right to your front door!

Rungal is a point of sales application of restaurant. The main use of this application is to take order from customer easier and faster. 

---
## Prerequisite

- [Node.js](https://nodejs.org/en/)
- [Express](https://www.npmjs.com/package/express)
- [MySQL](https://www.npmjs.com/package/mysql)
- [JWT](https://www.npmjs.com/package/jsonwebtoken)
- [Postman](https://www.getpostman.com/)

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

---
### Start
```bash
$ npm start
```

---
## Other Dependencies

- [Bcrypt.js](https://www.npmjs.com/package/bcryptjs)
- [Body Parser](https://www.npmjs.com/package/body-parser)
- [Cors](https://www.npmjs.com/package/cors)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Express Fileupload](https://www.npmjs.com/package/express-fileupload)
- [Fs](https://www.npmjs.com/package/fs)
- [Morgan](https://www.npmjs.com/package/morgan)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [Path](https://www.npmjs.com/package/path)

---
## Features

- Get ALL products/categories
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

### Product

- **/products** GET method: Get all products
- **/products** POST method: Add product (login required)
- **/products/:id** PUT method: Edit product (login required)
- **/products/:id** DELETE method: Delete product (login required)
- **/products/order/:id** PATCH method: Increase quantity product (login required)
- **/products/reduce/:id** PATCH method: Reduce quantity product (login required)

### Categories

- **/categories** GET method: Get all categories 
- **/categories** POST method: Add category (login required)
- **/categories/:id** PUT method: Edit category (login required)
- **/categories/:id** DELETE method: Delete category (login required)

### Users

- **/register** PUT method: Register user
- **/login** PUT method: Login user