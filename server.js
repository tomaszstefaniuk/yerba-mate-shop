require("dotenv").config();
const express = require("express"); // <=> import express from 'express';
const mongoose = require("mongoose");
const bodyParser = require('body-parser');

/*
1. Start mongod service using "mongod" command in Git Bash 
2. Start node.js server using "nodemon server.js" command
*/

mongoose.connect('mongodb://localhost/yerba', {
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

const PORT = process.env.PORT;

api.get("/product", productsApi.get);
api.put("/product", productsApi.put);
api.post("/product", productsApi.post);
api.delete("/product", productsApi.del);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
