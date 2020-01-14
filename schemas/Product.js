const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imgSrc: String
});

module.exports = mongoose.model('Product', productSchema);
