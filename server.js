const express = require("express"); // <=> import express from 'express';
const mongoose = require("mongoose");

const app = express();
const api = express.Router();

const PORT = 5000;

api.get("/test", (req, res) => {
  const { query } = req;
  res.send(`get ${query.q}`);
});
api.post("/test", (req, res) => {
  const { body } = req;
  res.send(`post ${body.q}`);
});
api.delete("/test", (req, res) => {
  const { query } = req;
  res.send(`delete ${query.q}`);
});

app.use('/api', api);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
