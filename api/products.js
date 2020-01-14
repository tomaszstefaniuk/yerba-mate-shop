const Product = require("../schemas/Product");

function get(req, res) { // pobieranie listy wszystkich produktów
  let errors = {};
  Product.find((err, products) => {
    if (err) {
      let errors = { "product": err };
      res.status(500).json(errors);
    }
    res.status(200).json(products);
  });
}

//'http://localhost:5000/api/product' header: { method: PUT, body: { name, price, imgSrc } }
function put(req, res) { // dodanie nowego produktu
  const {
    name,
    price,
    imgSrc
  } = req.body;

  let errors = {};

  const newProduct = Product({ name, price, imgSrc });
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

module.exports = {
  get,
  put,
  del,
  post
};
