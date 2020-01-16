require("dotenv").config();
const express = require("express"); // <=> import express from 'express';
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

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
const productsApi = require("./api/products");

const PORT = process.env.HOST_PORT;

api.get("/product", productsApi.get);
api.put("/product", productsApi.put);
api.post("/product", productsApi.post);
api.delete("/product", productsApi.del);

const whitelist = [`http://localhost:${process.env.PORT}`];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors());//(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
