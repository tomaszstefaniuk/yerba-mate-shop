require("dotenv").config();
const express = require("express"); // <=> import express from 'express';
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const PORT = process.env.HOST_PORT;

/*
1. Start mongod service using "mongod" command in Git Bash
2. Start node.js server using "nodemon server.js" command
*/

mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`Successfully connected to yerba DB`);
});

const app = express();
const api = express.Router();
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

app.set('secret', '12341234')

const productsApi = require("./api/product");
const mailApi = require("./api/mail");
const authController = require('./api/controllers/auth')
const orderController = require('./api/controllers/order')

api.use('/auth', authController)
api.use('/order', orderController)
api.get("/product/pagination", productsApi.pagination); // => api/product/pagination?type={X}
api.get("/product/many", productsApi.getMany);
api.get("/product", productsApi.get);
api.put("/product", productsApi.put);
api.post("/product", productsApi.post);
api.delete("/product", productsApi.del);

api.post("/mail", mailApi.post);

// const whitelist = [`http://localhost:${process.env.PORT}`];
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

app.use(cors());//(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);
app.use(express.static('build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app
