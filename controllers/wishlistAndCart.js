const Product = require("../models/product");
const slugify = require("slugify");
const User = require("../models/user");

exports.addWishList = async (req, res) => {
  try {
    const { productId } = req.body;
    console.log(req.body);
    console.log(req.body.user.email);
    console.log(productId);
    const user = await User.findOneAndUpdate(
      { email: req.body.user.email },
      {
        $addToSet: { wishlist: productId },
      },
      { new: true }
    ).exec();
    res.json({ ok: true });
  } catch (err) {
    console.log(err);
    res.status(400).send("Create Product Failed");
  }
};

exports.addCart = async (req, res) => {
  let products = await Product.find().limit(parseInt(req.params.count));
  res.json(products);
};

exports.getWishList = async (req, res) => {
  const list = await User.findOne({ email: req.params.email })
    .select("wishlist")
    .populate("wishlist")
    .exec();
  res.json(list);
};

exports.removeFromWishList = async (req, res) => {
  const { productId } = req.params;
  const user = await User.findOneAndUpdate(
    { email: req.user.email },
    { $pull: { wishlist: productId } }
  );
  res.json({ ok: true });
};
exports.getCart = async (req, res) => {
  let products = await Product.find().limit(parseInt(req.params.count)).exec();
  res.json(products);
};
