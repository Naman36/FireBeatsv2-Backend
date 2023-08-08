const express = require("express");
const { listAll } = require("../controllers/products");
const router = express.Router();

const { authCheck } = require("../middlewares/auth");
const { create } = require("../controllers/products");

router.post("/products", create);
router.get("/products/:count", listAll);

module.exports = router;
