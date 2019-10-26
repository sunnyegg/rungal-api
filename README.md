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

| **Main Dependencies** | **Description** | **Link** |
| --- | --- | --- |
| **Node.js** | A Javascript runtime. | [Go](https://nodejs.org/en/)
| **Express.js** | A Javascript framework for building web application/APIs. | [Go](https://expressjs.com/)
| **MySQL** | A relational database management system (RDMS). | [Go](https://www.npmjs.com/package/mysql)
| **JWT** | A package for generating token. | [Go](https://www.npmjs.com/package/jsonwebtoken)

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

### History Order and Revenue

- **/history** GET method: Get history order
- **/history** POST method: Add order (checkout)
- **/history/daily** GET method: Get daily income
- **/history/weekly** GET method: Get weekly income
- **/history/monthly** GET method: Get monthly income
- **/history/yearly** GET method: Get yearly income
