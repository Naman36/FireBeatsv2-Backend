const Product = require("../models/product");
const slugify = require("slugify");
exports.create = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.title);
    const newProduct = await new Product(req.body).save();
    res.json(newProduct);
  } catch (err) {
    console.log(err);
    res.status(400).send("Create Product Failed");
  }
};

exports.listAll = async (req, res) => {
  let products = await Product.find().limit(parseInt(req.params.count));
  res.json(products);
};
