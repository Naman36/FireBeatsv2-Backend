const express = require("express");
const router = express.Router();

const { authCheck } = require("../middlewares/auth");
const { create } = require("../controllers/products");
const {
  addWishList,
  addCart,
  getWishList,
  getCart,
  removeFromWishList,
} = require("../controllers/wishlistAndCart");
// WishList
router.post("/wishlist", addWishList);
router.get("/wishlist/:email", getWishList);
router.put("/wishlist/:productId", removeFromWishList);

//Cart
router.post("/add-cart", addCart);
router.get("/cart", getCart);

module.exports = router;
