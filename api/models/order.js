const mongoose = require('mongoose')
const Schema = mongoose.Schema

const orderSchema = new mongoose.Schema({
  user: { type: String, ref: 'User' },
  basket: { type: Array, required: true },
});

module.exports = mongoose.model('order', orderSchema);
