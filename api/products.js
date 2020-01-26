const Product = require("../schemas/Product");
const mongoose = require("mongoose");

function getMany(req, res) {
  const { items } = req.query;
  if (!Array.isArray(items) || items.length === 0) {
    res.json([]);
  } else {
    try {
      Product.find({
        '_id': { $in: [ ...items.map(_id => mongoose.Types.ObjectId(_id)) ]}
      }, (err, docs) => {
        res.json(docs);
      });
    } catch (err) {
      if (err) {
        let errors = { "error": err };
        res.status(500).json(errors);
      }
    }
  }
}

function get(req, res) { // pobieranie listy wszystkich produktów
  const { query } = req;
  const { type, q } = query;
  const itemsPerPage = Number(query.itemsPerPage);
  const page = Number(query.page);
  let errors = {};
  const filters = {};
  if (type) { filters.type = type; }
  if (q) { filters.name = { "$regex": q, "$options": "i" } }

  try {
    Product
    .find(filters)
    .skip(itemsPerPage * page)
    .limit(itemsPerPage)
    .exec((err, products) => {
      if (err) {
        let errors = { "error": err };
        res.status(500).json(errors);
      }
      res.status(200).json(products);
    });
  } catch (err) {
    if (err) {
      let errors = { "error": err };
      res.status(500).json(errors);
    }
  }
}

//'http://localhost:5000/api/product' header: { method: PUT, body: { name, price, imgSrc } }
function put(req, res) { // dodanie nowego produktu
  const {
    name,
    price,
    imgSrc,
    type
  } = req.body;

  let errors = {};

  const newProduct = Product({ name, price, imgSrc, type });
  newProduct.save((err, product) => {
    if (err) {
      let errors = { "product": err };
      res.status(500).json(errors);
    }
    res.status(200).json(product);
  })
}

function del(req, res) { // usunięcie produktu
  const { id } = req.query;

  Product.deleteOne({ "_id": id }, (err, result) => {
    if (err) {
      let errors = { "product": err };
      res.status(500).json(errors);
    }
    res.status(200).json(result);
  });
}

function post(req, res) { // edytowanie produktu
  res.send('post')
}

function pagination(req, res) {
  const { itemsPerPage, type, q } = req.query;

  const filters = {};
  if (type) { filters.type = type; }
  if (q) { filters.name = { "$regex": q, "$options": "i" } }

  Product.countDocuments(filters, (err, count) => {
    if (err) {
      let errors = { "product": err };
      res.status(500).json(errors);
    }
    res.status(200).json({
      itemsPerPage: Number(itemsPerPage),
      nOfPages: Math.ceil(count / Number(itemsPerPage)),
      total: count
    });
  })
}

module.exports = {
  get,
  getMany,
  put,
  del,
  post,
  pagination
};
