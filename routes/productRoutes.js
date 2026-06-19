const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createProduct,
  getProducts,
  updateProduct,
} = require("../controllers/productController");

router.post("/", protect, createProduct);
router.get("/", protect, getProducts);
router.put("/:id", protect, updateProduct);

module.exports = router;