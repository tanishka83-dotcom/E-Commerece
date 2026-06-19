const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createProduct,
  getProducts,
} = require("../controllers/productController");

router.post("/", protect, createProduct);
router.get("/", protect, getProducts);

module.exports = router;